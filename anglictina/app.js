(function () {
'use strict';
const U = window.UNITS;
const KEY = 'anglictina20.v1';
const IV = [1, 2, 4, 7, 14, 30, 60];          // rozestupy opakování ve dnech podle úrovně kartičky
const TOTAL = U.length * 7;
const view = document.getElementById('view');
const tabs = document.getElementById('tabs');
const SPK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM13 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const today = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 6e4) / 864e5); };
const norm = s => s.toLowerCase().replace(/[.,!?'’\-]/g, '').replace(/\s+/g, ' ').trim();
const plural = (n, a, b, c) => n === 1 ? a : (n >= 2 && n <= 4 ? b : c);

// ---------- slovíčka ----------
const W = {};
U.forEach((unit, u) => unit.groups.forEach((g, gi) => g[1].forEach((raw, i) => {
  const [en, cz, pr] = raw.split('|');
  const id = u + '.' + gi + '.' + i;
  W[id] = { id, en, cz, pr, u, g: gi };
})));
const ALL = Object.values(W);
const wordsOf = (u, g) => ALL.filter(w => w.u === u && w.g === g);

// ---------- stav ----------
const fresh = () => ({ done: 0, cards: {}, streak: 0, last: -1, tests: {}, rate: 0.85, sessions: 0 });
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

// ---------- hlas ----------
const canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let voice = null;
function pickVoice() {
  try {
    const vs = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
    voice = vs.find(v => /en[-_]GB/i.test(v.lang)) || vs.find(v => /en[-_]US/i.test(v.lang)) || vs[0] || null;
  } catch (e) {}
}
if (canSpeak) { pickVoice(); try { speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {} }
function speak(text) {
  if (!canSpeak) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voice ? voice.lang : 'en-GB';
    if (voice) u.voice = voice;
    u.rate = S.rate;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const spkBtn = text => canSpeak ? `<button type="button" class="spk" data-say="${esc(text)}" aria-label="Přehrát výslovnost">${SPK}</button>` : '';

// ---------- opakování ----------
const learned = () => Object.keys(S.cards).map(id => W[id]).filter(Boolean);
function dueCards(max) {
  const t = today();
  return shuffle(learned().filter(w => S.cards[w.id].d <= t)).sort((a, b) => S.cards[a.id].d - S.cards[b.id].d).slice(0, max);
}
function grade(w, ok) {
  const c = S.cards[w.id]; if (!c) return;
  c.b = ok ? Math.min(c.b + 1, IV.length - 1) : 0;
  c.d = today() + (ok ? IV[c.b] : 1);
  save();
}
function distract(w, field, n) {
  const pool = learned().concat(ALL.filter(x => x.u === w.u));
  const seen = new Set([w[field]]), out = [];
  for (const x of shuffle(pool)) { if (!seen.has(x[field])) { seen.add(x[field]); out.push(x[field]); if (out.length === n) break; } }
  return out;
}

// ---------- stavba lekce ----------
const parseQ = raw => { const p = raw.split('|'); return { k: 'choice', gap: true, prompt: p[0], answer: p[1], options: shuffle(p.slice(1)) }; };
const parseS = raw => { const p = raw.split('|'); return { en: p[0], cz: p[1] }; };
const wChoice = (w, toEn) => ({ k: 'choice', prompt: toEn ? w.cz : w.en, sub: toEn ? 'Jak se to řekne anglicky?' : 'Co to znamená?', say: toEn ? null : w.en, sayAfter: toEn ? w.en : null,
  answer: toEn ? w.en : w.cz, options: shuffle([toEn ? w.en : w.cz].concat(distract(w, toEn ? 'en' : 'cz', 3))) });
const typable = w => w.en.length <= 14 && !/[()]/.test(w.en);
const sec = (name, steps) => steps.map(s => Object.assign(s, { sec: name }));

function buildLesson(L) {
  const u = Math.floor(L / 7), d = L % 7, unit = U[u];
  let steps = [];
  const due = dueCards(d === 6 ? 30 : 18);
  steps = steps.concat(sec('Opakování', due.map(w => ({ k: 'flash', w }))));

  if (d === 6) {                                  // sedmý den: týdenní test
    const ws = shuffle(ALL.filter(w => w.u === u));
    const t = [];
    ws.slice(0, 8).forEach(w => t.push(wChoice(w, true)));
    unit.grammar.forEach(g => shuffle(g.q).slice(0, 2).forEach(q => t.push(parseQ(q))));
    shuffle(unit.sent).slice(0, 4).forEach(s => t.push(Object.assign({ k: 'build' }, parseS(s))));
    ws.filter(typable).slice(8, 11).forEach(w => t.push({ k: 'type', w }));
    t.forEach(s => { s.test = true; });
    steps.push({ k: 'info', sec: 'Týdenní test', title: 'Týdenní test: ' + unit.t, html: `<p>Čeká tě ${t.length} otázek ze slovíček, gramatiky a vět z celého týdne. Na výsledek 70 % a víc můžeš být hrdý. Když to nevyjde, nic se neděje, lekce si můžeš kdykoli zopakovat v Plánu.</p>` });
    steps = steps.concat(sec('Týdenní test', t));
    return { steps, newWords: [], title: 'Týdenní test' };
  }

  const ws = wordsOf(u, d);
  const nw = [];
  [ws.slice(0, 4), ws.slice(4)].forEach(half => {
    half.forEach(w => nw.push({ k: 'word', w }));
    shuffle(half).forEach(w => nw.push(wChoice(w, false)));
  });
  shuffle(ws).forEach(w => nw.push(wChoice(w, true)));
  shuffle(ws.filter(typable)).slice(0, 4).forEach(w => nw.push({ k: 'type', w }));
  steps = steps.concat(sec('Nová slovíčka', nw));

  const g = unit.grammar[Math.floor(d / 2)], second = d % 2 === 1;
  const gr = [{ k: 'info', kicker: second ? 'Připomenutí ze včerejška' : 'Nová gramatika', title: g.t, html: g.h }];
  g.q.slice(second ? 3 : 0, second ? 6 : 3).forEach(q => gr.push(parseQ(q)));
  steps = steps.concat(sec('Gramatika', gr));

  const todays = unit.sent.slice(d * 2, d * 2 + 2).map(parseS);
  const earlier = [];
  for (let i = 0; i < u; i++) U[i].sent.forEach(s => earlier.push(s));
  unit.sent.slice(0, d * 2).forEach(s => earlier.push(s));
  const bs = todays.concat(shuffle(earlier).slice(0, 1).map(parseS)).map(s => Object.assign({ k: 'build' }, s));
  steps = steps.concat(sec('Věty', bs));

  if (canSpeak) steps = steps.concat(sec('Poslech', shuffle(ws).slice(0, 4).map(w => ({ k: 'listen', w, options: shuffle([w.en].concat(distract(w, 'en', 3))) }))));

  const pr = [];
  if (d === 0 || d === 3) {
    pr.push({ k: 'info', kicker: 'Výslovnost týdne', title: unit.pron.t, html: unit.pron.h });
    unit.pron.w.forEach(x => { const p = x.split('|'); pr.push({ k: 'say', en: p[0], pr: p[1] }); });
  } else {
    shuffle(ws).slice(0, 4).forEach(w => pr.push({ k: 'say', en: w.en, pr: w.pr, cz: w.cz }));
  }
  pr.push({ k: 'say', en: todays[0].en, cz: todays[0].cz });
  steps = steps.concat(sec('Výslovnost', pr));

  return { steps, newWords: ws.map(w => w.id), title: unit.t };
}

// ---------- průběh lekce ----------
let ses = null;
function startLesson(L, advance) {
  const b = buildLesson(L);
  ses = { steps: b.steps, i: 0, L, advance, newWords: b.newWords, title: b.title, ok: 0, n: 0, tOk: 0, tN: 0, isTest: L % 7 === 6, t0: Date.now() };
  document.body.classList.add('insession');
  renderStep();
}
function startPractice() {
  let cards = dueCards(25);
  if (!cards.length) cards = shuffle(learned()).slice(0, 15);
  if (!cards.length) return;
  ses = { steps: sec('Kartičky', cards.map(w => ({ k: 'flash', w }))), i: 0, L: -1, advance: false, newWords: [], title: 'Kartičky', ok: 0, n: 0, tOk: 0, tN: 0, t0: Date.now() };
  document.body.classList.add('insession');
  renderStep();
}
function endSession() { ses = null; document.body.classList.remove('insession'); if (canSpeak) try { speechSynthesis.cancel(); } catch (e) {} show('dnes'); }
function next() { ses.i++; renderStep(); }

function frame(inner) {
  const s = ses.steps[ses.i];
  view.innerHTML = `<div class="sbar"><button type="button" class="x" id="quit" aria-label="Ukončit lekci">×</button><div class="prog"><i style="width:${Math.round(ses.i / ses.steps.length * 100)}%"></i></div></div>
  <div class="step"><div class="kicker">${esc(s.kicker || s.sec || '')}</div><div class="body">${inner}</div><div id="foot"></div></div>`;
  document.getElementById('quit').onclick = () => {
    document.getElementById('foot').innerHTML = `<div class="fb no"><strong>Ukončit lekci?</strong><span>Rozdělaná lekce se neuloží a příště začneš znovu.</span><div class="two"><button type="button" class="btn" id="qn">Pokračovat</button><button type="button" class="btn danger" id="qy">Ukončit</button></div></div>`;
    document.getElementById('qy').onclick = endSession;
    document.getElementById('qn').onclick = renderStep;
  };
  window.scrollTo(0, 0);
}
const foot = html => { document.getElementById('foot').innerHTML = html; };

function result(ok, correct, cz, sayText) {
  const s = ses.steps[ses.i];
  if (!s.re) { ses.n++; if (ok) ses.ok++; if (s.test) { ses.tN++; if (ok) ses.tOk++; } }
  if (!ok && !s.re && !s.test) ses.steps.push(Object.assign({}, s, { re: true, kicker: 'Ještě jednou' }));
  if (sayText) speak(sayText);
  foot(`<div class="fb ${ok ? 'ok' : 'no'}"><strong>${ok ? 'Správně' : 'Správná odpověď'}</strong>${ok && !cz ? '' : `<span><b>${esc(correct)}</b>${cz ? ' – ' + esc(cz) : ''}</span>`}<button type="button" class="btn primary big" data-enter id="nx">Dál</button></div>`);
  const nx = document.getElementById('nx'); nx.onclick = next; nx.focus();
}

const R = {
  info(s) {
    frame(`<h1>${esc(s.title)}</h1><div class="gram">${s.html}</div>`);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Rozumím, pokračovat</button>`);
    document.getElementById('nx').onclick = next;
  },
  word(s) {
    const w = s.w;
    frame(`<div class="card wordcard"><span class="kicker">Nové slovíčko</span><div class="en">${esc(w.en)}</div><div class="pr">${esc(w.pr)}</div>${spkBtn(w.en)}<div class="cz">${esc(w.cz)}</div></div><p class="muted small">Poslechni si slovo a řekni ho dvakrát nahlas.</p>`);
    speak(w.en);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Dál</button>`);
    document.getElementById('nx').onclick = next;
  },
  flash(s) {
    const w = s.w;
    frame(`<div class="card wordcard"><span class="kicker">Řekni anglicky</span><div class="cz">${esc(w.cz)}</div><div id="back" hidden class="stack" style="align-items:center"><div class="en">${esc(w.en)}</div><div class="pr">${esc(w.pr)}</div>${spkBtn(w.en)}</div></div>`);
    foot(`<button type="button" class="btn primary big" data-enter id="rev">Ukázat odpověď</button>`);
    document.getElementById('rev').onclick = () => {
      document.getElementById('back').hidden = false; speak(w.en);
      foot(`<div class="two"><button type="button" class="btn no" id="no">Nevěděl jsem</button><button type="button" class="btn yes" data-enter id="yes">Věděl jsem</button></div>`);
      const done = ok => { if (!s.re) { grade(w, ok); ses.n++; if (ok) ses.ok++; if (!ok) ses.steps.push(Object.assign({}, s, { re: true })); } next(); };
      document.getElementById('no').onclick = () => done(false);
      document.getElementById('yes').onclick = () => done(true);
    };
  },
  choice(s) {
    const p = s.gap ? esc(s.prompt).replace('___', '<span class="gap" id="gap">&nbsp;</span>') : esc(s.prompt);
    frame(`<p class="muted">${esc(s.sub || 'Doplň správný tvar.')}</p><div class="row"><div class="prompt">${p}</div>${s.say ? spkBtn(s.say) : ''}</div>
      <div class="opts">${s.options.map((o, i) => `<button type="button" class="opt" data-o="${esc(o)}"><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>`);
    if (s.say) speak(s.say);
    view.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const ok = b.dataset.o === s.answer;
      view.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (x.dataset.o === s.answer) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      const full = s.gap ? s.prompt.replace('___', s.answer === '–' ? '' : s.answer).replace(/\s*\([^)]*\)/, '').replace(/\s+/g, ' ') : null;
      if (s.gap) document.getElementById('gap').textContent = s.answer;
      result(ok, s.gap ? full : s.answer, null, s.gap ? full : s.sayAfter);
    });
  },
  type(s) {
    const w = s.w;
    frame(`<p class="muted">Napiš anglicky.</p><div class="prompt">${esc(w.cz)}</div><input class="answer" id="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Tvoje odpověď">`);
    foot(`<button type="button" class="btn primary big" data-enter id="chk">Zkontrolovat</button>`);
    const inp = document.getElementById('ans'); inp.focus();
    document.getElementById('chk').onclick = () => {
      if (!inp.value.trim()) { inp.focus(); return; }
      inp.disabled = true;
      result(norm(inp.value) === norm(w.en), w.en, w.cz, w.en);
    };
  },
  build(s) {
    const tiles = shuffle(s.en.split(' ').map((t, i) => ({ t, i })));
    frame(`<p class="muted">Poskládej větu anglicky.</p><div class="prompt">${esc(s.cz)}</div><div class="line" id="line"></div><div class="bank" id="bank">${tiles.map(x => `<button type="button" class="tile" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>`);
    foot(`<button type="button" class="btn primary big" data-enter id="chk" disabled>Zkontrolovat</button>`);
    const line = document.getElementById('line'), bank = document.getElementById('bank'), chk = document.getElementById('chk');
    let locked = false;
    view.querySelectorAll('.tile').forEach(b => b.onclick = () => {
      if (locked) return;
      (b.parentNode === bank ? line : bank).appendChild(b);
      chk.disabled = bank.children.length > 0;
    });
    chk.onclick = () => {
      locked = true;
      const got = Array.from(line.children).map(b => b.textContent).join(' ');
      result(norm(got) === norm(s.en), s.en, null, s.en);
    };
  },
  listen(s) {
    const w = s.w;
    frame(`<p class="muted">Poslouchej a vyber slovo, které slyšíš.</p><div class="row">${spkBtn(w.en)}<span class="muted small">Přehrát znovu</span></div>
      <div class="opts">${s.options.map((o, i) => `<button type="button" class="opt" data-o="${esc(o)}"><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>`);
    speak(w.en);
    view.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const ok = b.dataset.o === w.en;
      view.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (x.dataset.o === w.en) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      result(ok, w.en, w.cz, w.en);
    });
  },
  say(s) {
    frame(`<p class="muted">${canSpeak ? 'Poslechni si to a zopakuj nahlas. Klidně třikrát.' : 'Přečti to nahlas podle přepisu. Klidně třikrát.'}</p>
      <div class="card wordcard"><div class="en" style="font-size:${s.en.length > 14 ? '1.5rem' : '2.3rem'}">${esc(s.en)}</div>${s.pr ? `<div class="pr">${esc(s.pr)}</div>` : ''}${spkBtn(s.en)}${s.cz ? `<div class="cz">${esc(s.cz)}</div>` : ''}</div>`);
    speak(s.en);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Řekl jsem to nahlas</button>`);
    document.getElementById('nx').onclick = next;
  }
};

function renderStep() {
  const s = ses.steps[ses.i];
  if (!s) return finish();
  R[s.k](s);
}

function finish() {
  const t = today();
  const pct = ses.n ? Math.round(ses.ok / ses.n * 100) : 100;
  const mins = Math.max(1, Math.round((Date.now() - ses.t0) / 6e4));
  let testPct = null;
  if (ses.isTest && ses.tN) { testPct = Math.round(ses.tOk / ses.tN * 100); const u = Math.floor(ses.L / 7); S.tests[u] = Math.max(S.tests[u] || 0, testPct); }
  ses.newWords.forEach(id => { if (!S.cards[id]) S.cards[id] = { b: 0, d: t + 1 }; });
  if (ses.advance && ses.L === S.done) S.done = Math.min(TOTAL, S.done + 1);
  if (S.last !== t) { S.streak = S.last === t - 1 ? S.streak + 1 : 1; S.last = t; }
  S.sessions++;
  save();
  const head = testPct !== null ? (testPct >= 70 ? 'Týden zvládnutý' : 'Test dokončen') : 'Hotovo na dnešek';
  const newN = ses.advance ? ses.newWords.length : 0;
  view.innerHTML = `<div class="step" style="padding-top:32px"><div class="body">
    <div class="kicker">${esc(ses.title)}</div><h1>${head}</h1>
    <div class="score">${testPct !== null ? testPct : pct} %</div>
    <p class="muted">${testPct !== null ? 'výsledek týdenního testu' : 'správných odpovědí napoprvé'}</p>
    <div class="stats"><div class="stat"><strong>${mins}</strong><span>${plural(mins, 'minuta', 'minuty', 'minut')}</span></div><div class="stat"><strong>${newN}</strong><span>nových slovíček</span></div><div class="stat"><strong>${S.streak}</strong><span>${plural(S.streak, 'den', 'dny', 'dní')} v řadě</span></div></div>
    ${testPct !== null && testPct < 70 ? '<p>Pod 70 % doporučuju vrátit se v Plánu k lekcím, které ti dělaly potíže. Další týden je ale odemčený.</p>' : ''}
    ${S.done >= TOTAL && ses.advance ? '<p><b>Dokončil jsi celý kurz.</b> Kartičky ti dál budou připomínat slovíčka, aby ti zůstala v hlavě.</p>' : ''}
    </div><button type="button" class="btn primary big" data-enter id="home">Zpět na přehled</button></div>`;
  document.getElementById('home').onclick = endSession;
}

// ---------- obrazovky ----------
const V = {
  dnes() {
    const L = Math.min(S.done, TOTAL - 1), u = Math.floor(L / 7), d = L % 7, unit = U[u];
    const due = dueCards(999).length, n = learned().length, strong = learned().filter(w => S.cards[w.id].b >= 4).length;
    const finished = S.done >= TOTAL, doneToday = S.last === today() && S.done > 0;
    const g = unit.grammar[Math.floor(Math.min(d, 5) / 2)];
    const items = d === 6
      ? `<li><b>Test</b><span>21 otázek z celého týdne</span></li><li><b>Opakování</b><span>${due} ${plural(due, 'kartička', 'kartičky', 'kartiček')}</span></li>`
      : `<li><b>Opakování</b><span>${Math.min(due, 18)} ${plural(Math.min(due, 18), 'kartička', 'kartičky', 'kartiček')} z minulých dní</span></li>
         <li><b>Slovíčka</b><span>8 nových: ${esc(unit.groups[d][0])}</span></li>
         <li><b>Gramatika</b><span>${esc(g.t)}</span></li>
         <li><b>Věty</b><span>skládání vět ze slov</span></li>
         <li><b>Výslovnost</b><span>${d === 0 || d === 3 ? esc(unit.pron.t) : 'poslech a opakování nahlas'}</span></li>`;
    let cols = '';
    for (let w = 0; w < U.length; w++) {
      let c = '';
      for (let x = 0; x < 7; x++) { const i = w * 7 + x; c += `<i class="${i < S.done ? 'done' : (i === S.done ? 'now' : '')}"></i>`; }
      cols += `<div class="col">${c}<small>${w + 1}</small></div>`;
    }
    view.innerHTML = `
      <section class="card">
        ${finished ? `<div class="kicker">Kurz dokončen</div><h1>Všech ${TOTAL} lekcí máš za sebou</h1><p>Opakuj kartičky, dokud se ti budou nabízet. Lekce si můžeš projít znovu v Plánu.</p>`
        : `<div class="kicker">Týden ${u + 1} · den ${d + 1} · lekce ${L + 1} z ${TOTAL}</div><h1>${esc(unit.t)}</h1><p class="muted">${esc(unit.s)}</p><ul class="today-list">${items}</ul>`}
        ${doneToday && !finished ? '<p class="done-note">Dnešní lekce je hotová. Další tě čeká zítra.</p>' : ''}
        ${finished || doneToday
          ? `<button type="button" class="btn primary big" id="practice" ${n ? '' : 'disabled'}>Procvičit kartičky${due ? ' (' + due + ')' : ''}</button>${finished ? '' : '<button type="button" class="btn quiet" id="go">Udělat další lekci už dnes</button>'}`
          : `<button type="button" class="btn primary big" id="go">${S.done === 0 ? 'Začít první lekci' : 'Začít dnešních 20 minut'}</button>`}
      </section>
      <section class="stats">
        <div class="stat"><strong>${S.streak}</strong><span>${plural(S.streak, 'den', 'dny', 'dní')} v řadě</span></div>
        <div class="stat"><strong>${n}</strong><span>slovíček v kartičkách</span></div>
        <div class="stat"><strong>${strong}</strong><span>z nich umíš jistě</span></div>
      </section>
      <section class="card"><div class="row spread"><h2>14 týdnů</h2><span class="muted small">${S.done} z ${TOTAL} lekcí</span></div><div class="weeks">${cols}</div>
        <p class="muted small">Každý sloupec je jeden týden: šest lekcí a sedmý den test. Žluté políčko je lekce, která tě čeká.</p></section>
      ${!canSpeak ? '<p class="muted small">Tento prohlížeč neumí číst anglický text nahlas. Výslovnost uvidíš v českém přepisu; poslech funguje v Chromu, Edge a Safari.</p>' : ''}`;
    const go = document.getElementById('go'); if (go) go.onclick = () => startLesson(S.done, true);
    const pr = document.getElementById('practice'); if (pr) pr.onclick = startPractice;
  },
  plan() {
    view.innerHTML = `<h1>Plán kurzu</h1><p class="muted">Hotové lekce si můžeš kliknutím zopakovat. Písmeno T je týdenní test.</p>` + U.map((unit, u) => {
      let days = '';
      for (let d = 0; d < 7; d++) {
        const i = u * 7 + d, cls = i < S.done ? 'done' : (i === S.done ? 'now' : '');
        days += `<button type="button" class="${cls}" data-l="${i}" ${i > S.done ? 'disabled' : ''} aria-label="Týden ${u + 1}, ${d === 6 ? 'test' : 'den ' + (d + 1)}">${d === 6 ? 'T' : d + 1}</button>`;
      }
      return `<section class="card"><div class="row spread"><span class="kicker">Týden ${u + 1}</span>${S.tests[u] != null ? `<span class="lvl ${S.tests[u] >= 70 ? 'ok' : ''}">test ${S.tests[u]} %</span>` : ''}</div>
        <h2>${esc(unit.t)}</h2><p class="muted small">${unit.grammar.map(g => esc(g.t)).join(' · ')}</p><div class="days">${days}</div></section>`;
    }).join('');
    view.querySelectorAll('.days button').forEach(b => b.onclick = () => { const i = +b.dataset.l; startLesson(i, i === S.done); });
  },
  slovicka() {
    const ws = learned().sort((a, b) => a.en.toLowerCase() < b.en.toLowerCase() ? -1 : 1);
    const due = dueCards(999).length;
    view.innerHTML = `<h1>Slovíčka</h1>` + (ws.length ? `
      <p class="muted">Máš ${ws.length} ${plural(ws.length, 'slovíčko', 'slovíčka', 'slovíček')}. Kartičky se vracejí za 1, 2, 4, 7, 14, 30 a 60 dní, vždy když je znáš. Když ne, začínají znovu.</p>
      <button type="button" class="btn primary big" id="practice">Procvičit kartičky${due ? ' (' + due + ' k opakování)' : ''}</button>
      <input class="search" id="q" type="search" placeholder="Hledat anglicky nebo česky" aria-label="Hledat slovíčko">
      <ul class="wlist" id="wl"></ul>` : `<p class="muted">Zatím tu nic není. Po první lekci se tu objeví tvých prvních 8 slovíček.</p>`);
    if (!ws.length) return;
    const list = document.getElementById('wl');
    const draw = f => {
      f = f.toLowerCase();
      list.innerHTML = ws.filter(w => !f || w.en.toLowerCase().includes(f) || w.cz.toLowerCase().includes(f)).map(w => {
        const b = S.cards[w.id].b;
        return `<li>${spkBtn(w.en) || '<span></span>'}<span class="en">${esc(w.en)} <span class="muted small">[${esc(w.pr)}]</span></span><span class="lvl ${b >= 4 ? 'ok' : ''}">${b >= 4 ? 'umím' : (b >= 1 ? 'učím se' : 'nové')}</span><span class="cz">${esc(w.cz)}</span></li>`;
      }).join('') || '<li><span></span><span class="muted">Nic nenalezeno.</span></li>';
    };
    draw('');
    document.getElementById('q').oninput = e => draw(e.target.value);
    document.getElementById('practice').onclick = startPractice;
  },
  gramatika() {
    let html = '';
    U.forEach((unit, u) => {
      const open = unit.grammar.filter((g, gi) => u * 7 + gi * 2 < S.done || (u * 7 + gi * 2 === S.done && S.done > 0));
      if (!open.length) return;
      html += `<h3 class="unit">Týden ${u + 1} · ${esc(unit.t)}</h3>` + open.map(g => `<details><summary>${esc(g.t)}</summary><div class="gram">${g.h}</div></details>`).join('');
    });
    view.innerHTML = `<h1>Gramatika</h1><p class="muted">Přehled všeho, co jsi už probral. Přibývá s každou lekcí.</p>` + (html || '<p class="muted">První téma se tu objeví po první lekci.</p>');
  },
  nastaveni() {
    let code = '';
    try { code = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) {}
    view.innerHTML = `<h1>Nastavení</h1>
      <section class="card"><h2>Rychlost hlasu</h2><div class="row"><select id="rate" aria-label="Rychlost hlasu"><option value="0.7">Pomalu</option><option value="0.85">Mírně zpomaleně</option><option value="1">Normálně</option></select>${spkBtn('Hello, how are you today?')}</div></section>
      <section class="card"><h2>Přenos postupu na jiné zařízení</h2><p class="muted small">Postup se ukládá jen v tomto prohlížeči. Chceš-li pokračovat jinde, zkopíruj kód sem a vlož ho v nastavení na druhém zařízení. Kód si občas ulož i jako zálohu.</p>
        <textarea class="code" id="exp" readonly aria-label="Kód s tvým postupem">${esc(code)}</textarea><button type="button" class="btn" id="copy">Zkopírovat kód</button>
        <textarea class="code" id="imp" placeholder="Sem vlož kód z druhého zařízení" aria-label="Kód k načtení"></textarea><button type="button" class="btn" id="load">Načíst postup z kódu</button><p class="small" id="msg" role="status"></p></section>
      <section class="card"><h2>Začít od začátku</h2><p class="muted small">Smaže všechny lekce i kartičky v tomto prohlížeči.</p><div id="rs"><button type="button" class="btn danger" id="reset">Smazat postup</button></div></section>`;
    const rate = document.getElementById('rate'); rate.value = String(S.rate);
    rate.onchange = () => { S.rate = +rate.value; save(); speak('Hello, how are you today?'); };
    const msg = document.getElementById('msg'), exp = document.getElementById('exp');
    document.getElementById('copy').onclick = () => {
      const fallback = () => { exp.focus(); exp.select(); msg.textContent = 'Kód je označený, zkopíruj ho ručně.'; };
      try { navigator.clipboard.writeText(exp.value).then(() => { msg.textContent = 'Zkopírováno.'; }, fallback); } catch (e) { fallback(); }
    };
    document.getElementById('load').onclick = () => {
      try {
        const o = JSON.parse(decodeURIComponent(escape(atob(document.getElementById('imp').value.trim()))));
        if (typeof o.done !== 'number' || typeof o.cards !== 'object') throw 0;
        S = Object.assign(fresh(), o); save(); msg.textContent = 'Postup načten: ' + S.done + ' lekcí, ' + Object.keys(S.cards).length + ' slovíček.';
      } catch (e) { msg.textContent = 'Kód se nepodařilo přečíst. Zkopíruj ho znovu celý.'; }
    };
    document.getElementById('reset').onclick = () => {
      document.getElementById('rs').innerHTML = `<div class="two"><button type="button" class="btn" id="rn">Ponechat</button><button type="button" class="btn danger" id="ry">Opravdu smazat</button></div>`;
      document.getElementById('rn').onclick = () => show('nastaveni');
      document.getElementById('ry').onclick = () => { S = fresh(); save(); show('dnes'); };
    };
  }
};

function show(tab) {
  if (!V[tab]) tab = 'dnes';
  tabs.querySelectorAll('button').forEach(b => { if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  V[tab]();
  window.scrollTo(0, 0);
}
tabs.addEventListener('click', e => { const b = e.target.closest('button[data-tab]'); if (b) show(b.dataset.tab); });
document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say); });
document.addEventListener('keydown', e => {
  if (!ses) return;
  if (e.key === 'Enter') {
    const b = view.querySelector('[data-enter]:not([disabled])');
    if (b) { e.preventDefault(); b.click(); }
  } else if (/^[1-4]$/.test(e.key) && e.target.tagName !== 'INPUT') {
    const o = view.querySelectorAll('.opt:not([disabled])')[+e.key - 1];
    if (o) o.click();
  }
});
show('dnes');
})();
