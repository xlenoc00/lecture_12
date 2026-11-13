(function () {
'use strict';
const U = window.UNITS;
const D = U.map((unit, i) => unit.dlg || (window.DIALOGS || [])[i]);
const KEY = 'anglictina20.v1';
const IV = [1, 2, 4, 7, 14, 30, 60];          // rozestupy opakování ve dnech podle úrovně kartičky
const TOTAL = U.length * 7;
const GOAL = 20;                               // denní cíl v minutách
const STAGES = [[0, 'Základy', 'A1'], [14, 'Rozjezd', 'A2'], [26, 'Samostatnost', 'B1'], [39, 'Jistota', 'B1+ až B2']].filter(s => s[0] < U.length);
const stageOf = u => STAGES.filter(s => s[0] <= u).pop();
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
  W[id] = { id, en, cz, pr: pr || '', u, g: gi };
})));
const ALL = Object.values(W);
const wordsOf = (u, g) => ALL.filter(w => w.u === u && w.g === g);
const prHtml = pr => pr ? `<div class="pr">${esc(pr)}</div>` : '';

// ---------- stav ----------
const fresh = () => ({ done: 0, cards: {}, miss: {}, log: {}, streak: 0, best: 0, last: -1, tests: {}, rate: 0.7, sessions: 0, fs: 0, noType: false, intro: 0 });
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
if (S.done > 0) S.intro = 1;
const applyFs = () => { document.documentElement.dataset.fs = S.fs || 0; };
applyFs();
const SES = KEY + '.ses';                     // rozdělaná lekce, aby šla přerušit a dokončit později
const saveSes = () => { try { localStorage.setItem(SES, JSON.stringify(ses)); } catch (e) {} };
const clearSes = () => { try { localStorage.removeItem(SES); } catch (e) {} };
function loadSes() {
  try {
    const o = JSON.parse(localStorage.getItem(SES));
    if (!o || !Array.isArray(o.steps) || o.i >= o.steps.length || (o.advance && o.L !== S.done)) { if (o) clearSes(); return null; }
    return o;
  } catch (e) { return null; }
}
const curStreak = () => S.last >= today() - 1 ? S.streak : 0;

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
function speak(text, slow, keep) {
  if (!canSpeak) return;
  try {
    if (!keep) speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voice ? voice.lang : 'en-GB';
    if (voice) u.voice = voice;
    u.rate = slow ? 0.55 : S.rate;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const playRow = text => canSpeak ? `<div class="row playrow"><button type="button" class="btn play" data-say="${esc(text)}">${SPK}<span>Přehrát</span></button><button type="button" class="btn" data-say="${esc(text)}" data-slow="1">Pomalu</button></div>` : '';
const fsButtons = () => `<div class="seg" id="fs">${['Běžné', 'Větší', 'Největší'].map((l, i) => `<button type="button" class="btn" data-fs="${i}" aria-pressed="${(S.fs || 0) === i}">${l}</button>`).join('')}</div>`;
function bindFs(after) {
  document.querySelectorAll('#fs button').forEach(b => b.onclick = () => { S.fs = +b.dataset.fs; save(); applyFs(); after(); });
}
const spkBtn = text => canSpeak ? `<button type="button" class="spk" data-say="${esc(text)}" aria-label="Přehrát výslovnost">${SPK}</button>` : '';

// ---------- opakování slovíček ----------
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

// ---------- úlohy ----------
const qStep = (u, g, i) => { const p = U[u].grammar[g].q[i].split('|'); return { k: 'choice', gap: true, key: 'q' + u + '.' + g + '.' + i, prompt: p[0], answer: p[1], options: shuffle(p.slice(1)) }; };
const sStep = (u, i, kind) => { const p = U[u].sent[i].split('|'); return { k: kind, key: 's' + u + '.' + i, en: p[0], cz: p[1] }; };
const wChoice = (w, toEn) => ({ k: 'choice', prompt: toEn ? w.cz : w.en, sub: toEn ? 'Jak se to řekne anglicky?' : 'Co to znamená?', say: toEn ? null : w.en, sayAfter: toEn ? w.en : null,
  answer: toEn ? w.en : w.cz, options: shuffle([toEn ? w.en : w.cz].concat(distract(w, toEn ? 'en' : 'cz', 3))) });
const typable = w => w.en.length <= 14 && !/[()]/.test(w.en);
const sec = (name, steps) => steps.map(s => Object.assign(s, { sec: name }));
const dictOr = () => canSpeak ? 'dict' : 'build';

// chyby z gramatiky a vět, které se vracejí další dny
function dueMiss(max) {
  const t = today(), out = [];
  for (const key of shuffle(Object.keys(S.miss))) {
    if (S.miss[key].d > t) continue;
    const p = key.slice(1).split('.').map(Number);
    let s = null;
    try { s = key[0] === 'q' ? qStep(p[0], p[1], p[2]) : sStep(p[0], p[1], Math.random() < 0.5 ? 'build' : dictOr()); } catch (e) {}
    if (!s) { delete S.miss[key]; continue; }
    s.fromMiss = true; s.kicker = 'Oprava chyby z minula';
    out.push(s);
    if (out.length === max) break;
  }
  return out;
}
function doneSentences(L) {           // věty z lekcí před lekcí L
  const out = [];
  for (let u = 0; u < U.length && u * 7 < L; u++) U[u].sent.forEach((x, i) => { if (u * 7 + Math.floor(i / 2) < L) out.push([u, i]); });
  return out;
}
function dialogSteps(u, k) {
  const raw = D[u] && D[u][k]; if (!raw) return [];
  const lines = raw.slice(1).map(x => { const p = x.split('|'); return { en: p[0], cz: p[1] }; });
  const others = [];
  (D[u] || []).forEach(dl => dl.slice(1).forEach((x, i) => { if (i % 2) others.push(x.split('|')[0]); }));
  const steps = [{ k: 'dlg', title: raw[0], lines }];
  const bIdx = lines.map((x, i) => i).filter(i => i % 2);
  shuffle(bIdx).slice(0, 3).sort((a, b) => a - b).forEach(i => {
    const wrong = shuffle(others.filter(o => o !== lines[i].en)).slice(0, 2);
    steps.push({ k: 'choice', prompt: lines[i - 1].en, sub: 'Co na to odpovíš?', say: lines[i - 1].en, answer: lines[i].en, sayAfter: lines[i].en, options: shuffle([lines[i].en].concat(wrong)) });
  });
  bIdx.slice(0, 3).forEach(i => steps.push({ k: 'role', a: lines[i - 1], b: lines[i] }));
  return sec('Rozhovor', steps);
}

// ---------- stavba lekce ----------
function buildLesson(L) {
  const u = Math.floor(L / 7), d = L % 7, unit = U[u];
  let steps = [];
  const due = dueCards(d === 6 ? 30 : 15);
  steps = steps.concat(sec('Opakování', due.map(w => ({ k: 'flash', w })).concat(dueMiss(5))));

  if (d === 6) {                                  // sedmý den: týdenní test
    const ws = shuffle(ALL.filter(w => w.u === u));
    const t = [];
    ws.slice(0, 8).forEach(w => t.push(wChoice(w, true)));
    unit.grammar.forEach((g, gi) => shuffle([0, 1, 2, 3, 4, 5]).slice(0, 2).forEach(qi => t.push(qStep(u, gi, qi))));
    shuffle(unit.sent.map((x, i) => i)).slice(0, 4).forEach((i, n) => t.push(sStep(u, i, n < 2 ? 'build' : dictOr())));
    ws.filter(typable).slice(8, 11).forEach(w => t.push({ k: 'type', w }));
    t.forEach(s => { s.test = true; });
    steps.push({ k: 'info', sec: 'Týdenní test', title: 'Týdenní test: ' + unit.t, html: `<p>Čeká tě ${t.length} otázek ze slovíček, gramatiky a vět z celého týdne. Na výsledek 70 % a víc můžeš být hrdý. Co pokazíš, se ti v dalších dnech vrátí k opravě.</p>` });
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
  shuffle(ws.filter(typable)).slice(0, 3).forEach(w => nw.push({ k: 'type', w }));
  steps = steps.concat(sec('Nová slovíčka', nw));

  const gi = Math.floor(d / 2), g = unit.grammar[gi], second = d % 2 === 1;
  const gr = [{ k: 'info', kicker: second ? 'Připomenutí ze včerejška' : 'Nová gramatika', title: g.t, html: g.h }];
  for (let i = second ? 3 : 0; i < (second ? 6 : 3); i++) gr.push(qStep(u, gi, i));
  steps = steps.concat(sec('Gramatika', gr));

  const dlg = d === 1 ? dialogSteps(u, 0) : (d === 4 ? dialogSteps(u, 1) : []);
  const earlier = shuffle(doneSentences(L));
  const bs = [sStep(u, d * 2, 'build'), sStep(u, d * 2 + 1, 'build')];
  if (!dlg.length && earlier[0]) bs.push(sStep(earlier[0][0], earlier[0][1], 'build'));
  steps = steps.concat(sec('Věty', bs));

  if (canSpeak) {
    const dc = [sStep(u, d * 2 + (L % 2), 'dict')];
    if (earlier[1]) dc.push(sStep(earlier[1][0], earlier[1][1], 'dict'));
    steps = steps.concat(sec('Diktát', dc));
  }
  if (dlg.length) { steps = steps.concat(dlg); return { steps, newWords: ws.map(w => w.id), title: unit.t }; }

  if (canSpeak) steps = steps.concat(sec('Poslech', shuffle(ws).slice(0, 3).map(w => ({ k: 'listen', w, options: shuffle([w.en].concat(distract(w, 'en', 3))) }))));
  const pr = [];
  if (d === 0 || d === 3) {
    pr.push({ k: 'info', kicker: 'Výslovnost týdne', title: unit.pron.t, html: unit.pron.h });
    unit.pron.w.forEach(x => { const p = x.split('|'); pr.push({ k: 'say', en: p[0], pr: p[1] }); });
  } else {
    shuffle(ws).slice(0, 3).forEach(w => pr.push({ k: 'say', en: w.en, pr: w.pr, cz: w.cz }));
    const p = unit.sent[d * 2].split('|'); pr.push({ k: 'say', en: p[0], cz: p[1] });
  }
  steps = steps.concat(sec('Výslovnost', pr));
  return { steps, newWords: ws.map(w => w.id), title: unit.t };
}

function buildQuick() {
  let cards = dueCards(10);
  if (!cards.length) cards = shuffle(learned()).slice(0, 8);
  let steps = sec('Kartičky', cards.map(w => ({ k: 'flash', w })));
  const more = dueMiss(3), qs = [];
  U.forEach((unit, u) => unit.grammar.forEach((g, gi) => { if (u * 7 + gi * 2 < S.done) for (let i = 0; i < 6; i++) qs.push([u, gi, i]); }));
  shuffle(qs).slice(0, Math.max(0, 3 - more.length)).forEach(q => more.push(qStep(q[0], q[1], q[2])));
  const sn = shuffle(doneSentences(S.done))[0];
  if (sn) more.push(sStep(sn[0], sn[1], dictOr()));
  return steps.concat(sec('Rychlé procvičení', more));
}

// ---------- průběh lekce ----------
let ses = null;
function begin(o) {
  ses = Object.assign({ i: 0, L: -1, advance: false, newWords: [], ok: 0, n: 0, tOk: 0, tN: 0, act: 0, ts: Date.now() }, o);
  if (!ses.steps.length) { ses = null; return; }
  document.body.classList.add('insession');
  renderStep();
}
function resume(o) { ses = o; document.body.classList.add('insession'); renderStep(); }
function startLesson(L, advance) { const b = buildLesson(L); begin({ steps: b.steps, L, advance, newWords: b.newWords, title: b.title, isTest: L % 7 === 6 }); }
function startPractice() {
  let cards = dueCards(25);
  if (!cards.length) cards = shuffle(learned()).slice(0, 15);
  begin({ steps: sec('Kartičky', cards.map(w => ({ k: 'flash', w }))), title: 'Kartičky' });
}
function startQuick() { begin({ steps: buildQuick(), title: 'Pětiminutovka' }); }
function endSession() { ses = null; document.body.classList.remove('insession'); if (canSpeak) try { speechSynthesis.cancel(); } catch (e) {} show('dnes'); }
function tick() { const now = Date.now(); ses.act += Math.min(now - ses.ts, 90000); ses.ts = now; }   // čas bez dlouhých pauz
function next() { tick(); ses.i++; renderStep(); }

function frame(inner) {
  const s = ses.steps[ses.i], left = ses.steps.length - ses.i;
  const mins = Math.max(1, Math.round(left * 18 / 60));
  view.innerHTML = `<div class="sbar"><div class="line1"><button type="button" class="x" id="quit">Přerušit</button><div class="prog"><i style="width:${Math.round(ses.i / ses.steps.length * 100)}%"></i></div></div>
    <div class="muted small">Krok ${ses.i + 1} z ${ses.steps.length} · zbývá asi ${mins} ${plural(mins, 'minuta', 'minuty', 'minut')}</div></div>
  <div class="step"><div class="kicker">${esc(s.kicker || s.sec || '')}</div><div class="body">${inner}</div><div id="foot"></div></div>`;
  document.getElementById('quit').onclick = () => {
    document.getElementById('foot').innerHTML = `<div class="fb ok"><strong>Přerušit lekci?</strong><span>Lekce se uloží. Až se vrátíš, budeš pokračovat přesně odsud.</span><div class="two"><button type="button" class="btn" id="qn">Zůstat v lekci</button><button type="button" class="btn primary" id="qy">Přerušit</button></div></div>`;
    document.getElementById('qy').onclick = endSession;
    document.getElementById('qn').onclick = renderStep;
  };
  window.scrollTo(0, 0);
}
const foot = html => { document.getElementById('foot').innerHTML = html; };

function result(ok, correct, cz, sayText) {
  const s = ses.steps[ses.i];
  if (!s.re) {
    ses.n++; if (ok) ses.ok++;
    if (s.test) { ses.tN++; if (ok) ses.tOk++; }
    if (s.key) {
      const m = S.miss[s.key];
      if (!ok) S.miss[s.key] = { b: 0, d: today() + 1 };
      else if (m && s.fromMiss) { m.b++; if (m.b >= 3) delete S.miss[s.key]; else m.d = today() + IV[m.b]; }
      save();
    }
  }
  if (!ok && !s.re && !s.test) ses.steps.push(Object.assign({}, s, { re: true, kicker: 'Ještě jednou' }));
  if (sayText) speak(sayText);
  foot(`<div class="fb ${ok ? 'ok' : 'no'}"><strong>${ok ? 'Správně' : 'Skoro. Správně je:'}</strong>${ok && !cz ? '' : `<span><b>${esc(correct)}</b>${cz ? ' – ' + esc(cz) : ''}</span>`}<button type="button" class="btn primary big" data-enter id="nx">Dál</button></div>`);
  const nx = document.getElementById('nx'); nx.onclick = next; nx.focus();
}
const optsHtml = options => `<div class="opts">${options.map((o, i) => `<button type="button" class="opt" data-o="${esc(o)}"><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>`;
function bindOpts(answer, done) {
  view.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const ok = b.dataset.o === answer;
    view.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (x.dataset.o === answer) x.classList.add('right'); });
    if (!ok) b.classList.add('wrong');
    done(ok);
  });
}

const R = {
  info(s) {
    frame(`<h1>${esc(s.title)}</h1><div class="gram">${s.html}</div>`);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Rozumím, pokračovat</button>`);
    document.getElementById('nx').onclick = next;
  },
  word(s) {
    const w = s.w;
    frame(`<div class="card wordcard"><span class="kicker">Nové slovíčko</span><div class="en">${esc(w.en)}</div>${prHtml(w.pr)}<div class="cz">${esc(w.cz)}</div>${playRow(w.en)}</div><p class="muted small">Poslechni si slovo a řekni ho dvakrát nahlas.</p>`);
    speak(w.en);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Dál</button>`);
    document.getElementById('nx').onclick = next;
  },
  flash(s) {
    const w = s.w;
    frame(`<div class="card wordcard"><span class="kicker">Řekni anglicky</span><div class="cz">${esc(w.cz)}</div><div id="back" hidden class="stack" style="align-items:center"><div class="en">${esc(w.en)}</div>${prHtml(w.pr)}${playRow(w.en)}</div></div>`);
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
    frame(`<p class="muted">${esc(s.sub || 'Doplň správný tvar.')}</p><div class="prompt">${p}</div>${s.say ? playRow(s.say) : ''}${optsHtml(s.options)}`);
    if (s.say) speak(s.say);
    bindOpts(s.answer, ok => {
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
  dict(s) {
    frame(`<p class="muted">Napiš anglicky větu, kterou slyšíš. Na velkých písmenech a čárkách nezáleží.</p>
      ${playRow(s.en)}
      <input class="answer" id="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Věta, kterou slyšíš">`);
    speak(s.en);
    foot(`<button type="button" class="btn primary big" data-enter id="chk">Zkontrolovat</button>`);
    const inp = document.getElementById('ans'); inp.focus();
    document.getElementById('chk').onclick = () => {
      if (!inp.value.trim()) { inp.focus(); return; }
      inp.disabled = true;
      result(norm(inp.value) === norm(s.en), s.en, s.cz, null);
    };
  },
  build(s, heard) {
    const tiles = shuffle(s.en.split(' ').map((t, i) => ({ t, i })));
    frame(`<p class="muted">${heard ? 'Poskládej větu, kterou slyšíš.' : 'Poskládej větu anglicky.'}</p>${heard ? playRow(s.en) : `<div class="prompt">${esc(s.cz)}</div>`}<div class="line" id="line"></div><div class="bank" id="bank">${tiles.map(x => `<button type="button" class="tile" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>`);
    if (heard) speak(s.en);
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
      result(norm(got) === norm(s.en), s.en, heard ? s.cz : null, heard ? null : s.en);
    };
  },
  listen(s) {
    const w = s.w;
    frame(`<p class="muted">Poslouchej a vyber slovo, které slyšíš.</p>${playRow(w.en)}${optsHtml(s.options)}`);
    speak(w.en);
    bindOpts(w.en, ok => result(ok, w.en, w.cz, w.en));
  },
  say(s) {
    frame(`<p class="muted">${canSpeak ? 'Poslechni si to a zopakuj nahlas. Klidně třikrát.' : 'Přečti to nahlas. Klidně třikrát.'}</p>
      <div class="card wordcard"><div class="en" style="font-size:${s.en.length > 14 ? '1.5rem' : '2.3rem'}">${esc(s.en)}</div>${prHtml(s.pr)}${s.cz ? `<div class="cz">${esc(s.cz)}</div>` : ''}${playRow(s.en)}</div>`);
    speak(s.en);
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Řekl jsem to nahlas</button>`);
    document.getElementById('nx').onclick = next;
  },
  dlg(s) {
    frame(`<h1>${esc(s.title)}</h1><p class="muted">Přečti si rozhovor a poslechni si ho. Potom budeš odpovídat sám.</p>
      <div class="dlg">${s.lines.map((x, i) => `<div class="ln ${i % 2 ? 'b' : 'a'}"><div><b>${i % 2 ? 'B' : 'A'}</b> ${esc(x.en)}<span class="cz">${esc(x.cz)}</span></div>${spkBtn(x.en)}</div>`).join('')}</div>
      ${canSpeak ? '<button type="button" class="btn" id="all">Přehrát celý rozhovor</button>' : ''}`);
    const all = document.getElementById('all');
    if (all) all.onclick = () => s.lines.forEach((x, i) => speak(x.en, false, i > 0));
    foot(`<button type="button" class="btn primary big" data-enter id="nx">Pokračovat</button>`);
    document.getElementById('nx').onclick = next;
  },
  role(s) {
    frame(`<p class="muted">Hraješ roli B. Odpověz nahlas anglicky a potom si odpověď zkontroluj.</p>
      <div class="dlg"><div class="ln a"><div><b>A</b> ${esc(s.a.en)}<span class="cz">${esc(s.a.cz)}</span></div>${spkBtn(s.a.en)}</div></div>
      <div class="prompt">${esc(s.b.cz)}</div>
      <div id="back" hidden class="dlg"><div class="ln b"><div><b>B</b> ${esc(s.b.en)}</div>${spkBtn(s.b.en)}</div></div>`);
    speak(s.a.en);
    foot(`<button type="button" class="btn primary big" data-enter id="rev">Ukázat odpověď</button>`);
    document.getElementById('rev').onclick = () => {
      document.getElementById('back').hidden = false; speak(s.b.en);
      foot(`<button type="button" class="btn primary big" data-enter id="nx">Dál</button>`);
      document.getElementById('nx').onclick = next;
    };
  }
};

function renderStep() {
  const s = ses.steps[ses.i];
  if (!s) return finish();
  ses.ts = Date.now();
  saveSes();
  if (S.noType && s.k === 'type') Object.assign(s, wChoice(s.w, true));
  if (S.noType && s.k === 'dict') return R.build(s, true);
  R[s.k](s);
}

function finish() {
  const t = today();
  const pct = ses.n ? Math.round(ses.ok / ses.n * 100) : 100;
  const mins = Math.max(1, Math.round(ses.act / 6e4));
  let testPct = null;
  if (ses.isTest && ses.tN) { testPct = Math.round(ses.tOk / ses.tN * 100); const u = Math.floor(ses.L / 7); S.tests[u] = Math.max(S.tests[u] || 0, testPct); }
  ses.newWords.forEach(id => { if (!S.cards[id]) S.cards[id] = { b: 0, d: t + 1 }; });
  const advanced = ses.advance && ses.L === S.done;
  if (advanced) S.done = Math.min(TOTAL, S.done + 1);
  if (S.last !== t) { S.streak = S.last === t - 1 ? S.streak + 1 : 1; S.last = t; }
  S.best = Math.max(S.best || 0, S.streak);
  S.log[t] = (S.log[t] || 0) + mins;
  S.sessions++;
  save();
  clearSes();
  const head = testPct !== null ? (testPct >= 70 ? 'Týden zvládnutý' : 'Test dokončen') : (S.log[t] >= GOAL ? 'Hotovo na dnešek' : 'Hotovo');
  const more = advanced && S.done < TOTAL;
  view.innerHTML = `<div class="step" style="padding-top:32px"><div class="body">
    <div class="kicker">${esc(ses.title)}</div><h1>${head}</h1>
    <div class="score">${testPct !== null ? testPct : pct} %</div>
    <p class="muted">${testPct !== null ? 'výsledek týdenního testu' : 'správných odpovědí napoprvé'}</p>
    <div class="stats"><div class="stat"><strong>${S.log[t]}</strong><span>${plural(S.log[t], 'minuta', 'minuty', 'minut')} dnes</span></div><div class="stat"><strong>${advanced ? ses.newWords.length : 0}</strong><span>nových slovíček</span></div><div class="stat"><strong>${S.streak}</strong><span>${plural(S.streak, 'den', 'dny', 'dní')} v řadě</span></div></div>
    ${testPct !== null && testPct < 70 ? '<p>Pod 70 % doporučuju vrátit se v Plánu k lekcím, které ti dělaly potíže. Další týden je ale odemčený.</p>' : ''}
    ${S.done >= TOTAL && advanced ? '<p><b>Dokončil jsi celý kurz.</b> Kartičky ti dál budou připomínat slovíčka, aby ti zůstala v hlavě.</p>' : ''}
    </div><div class="stack"><button type="button" class="btn primary big" data-enter id="home">${more ? 'Stačí, zpět na přehled' : 'Zpět na přehled'}</button>
    ${more ? '<button type="button" class="btn big" id="more">Chytlo mě to, další lekce</button>' : ''}</div></div>`;
  document.getElementById('home').onclick = endSession;
  const mb = document.getElementById('more'); if (mb) mb.onclick = () => startLesson(S.done, true);
}

// ---------- obrazovky ----------
const V = {
  dnes() {
    const t = today(), hour = new Date().getHours();
    const L = Math.min(S.done, TOTAL - 1), u = Math.floor(L / 7), d = L % 7, unit = U[u], st = stageOf(u);
    const due = dueCards(9999).length, n = learned().length;
    const fixes = Object.keys(S.miss).filter(k => S.miss[k].d <= t).length;
    const finished = S.done >= TOTAL, doneToday = S.last === t && S.done > 0;
    const saved = loadSes();
    const g = unit.grammar[Math.floor(Math.min(d, 5) / 2)];
    const rev = `${Math.min(due, 15)} ${plural(Math.min(due, 15), 'kartička', 'kartičky', 'kartiček')}${fixes ? ' a ' + Math.min(fixes, 5) + ' ' + plural(Math.min(fixes, 5), 'chyba', 'chyby', 'chyb') + ' k opravě' : ''}`;
    const items = d === 6
      ? `<li><b>Test</b><span>21 otázek z celého týdne</span></li><li><b>Opakování</b><span>${due} ${plural(due, 'kartička', 'kartičky', 'kartiček')}</span></li>`
      : `<li><b>Opakování</b><span>${rev}</span></li>
         <li><b>Slovíčka</b><span>8 nových: ${esc(unit.groups[d][0])}</span></li>
         <li><b>Gramatika</b><span>${esc(g.t)}</span></li>
         <li><b>Věty</b><span>skládání a diktát</span></li>
         ${(d === 1 || d === 4) && D[u] && D[u][d === 1 ? 0 : 1] ? `<li><b>Rozhovor</b><span>${esc(D[u][d === 1 ? 0 : 1][0])}</span></li>` : `<li><b>Výslovnost</b><span>${d === 0 || d === 3 ? esc(unit.pron.t) : 'poslech a opakování nahlas'}</span></li>`}`;
    let cells = '';
    for (let w = 0; w < U.length; w++) cells += `<i class="${(w + 1) * 7 <= S.done ? 'done' : (w === Math.floor(S.done / 7) ? 'now' : '')}" title="Týden ${w + 1}"></i>`;
    let cal = '', week = 0, total = 0, days = 0;
    for (let i = 27; i >= 0; i--) { const m = S.log[t - i] || 0; cal += `<i class="${m >= GOAL ? 'done' : (m ? 'some' : '')}${i === 0 ? ' today' : ''}" title="${m} min"></i>`; if (i < 7 && m) week++; }
    Object.keys(S.log).forEach(k => { total += S.log[k]; days++; });
    const mt = S.log[t] || 0, streak = curStreak();
    const broken = S.last >= 0 && S.last < t - 1;
    const buttons = saved ? ''
      : finished ? `<button type="button" class="btn primary big" id="practice" ${n ? '' : 'disabled'}>Procvičit kartičky${due ? ' (' + due + ')' : ''}</button>`
      : doneToday ? `<button type="button" class="btn primary big" id="go">Pokračovat další lekcí</button><button type="button" class="btn big" id="practice">Procvičit kartičky${due ? ' (' + due + ')' : ''}</button>`
      : `<button type="button" class="btn primary big" id="go">${S.done === 0 ? 'Začít první lekci' : 'Začít dnešních 20 minut'}</button>${S.done > 0 ? '<button type="button" class="btn quiet" id="quick">Dnes mám jen 5 minut</button>' : ''}`;
    view.innerHTML = `
      <p class="hello">${hour < 10 ? 'Dobré ráno' : (hour < 18 ? 'Dobrý den' : 'Dobrý večer')}</p>
      ${saved ? `<section class="card"><div class="kicker">Rozdělaná lekce</div><h1>${esc(saved.title)}</h1><p>Skončil jsi u kroku ${saved.i + 1} z ${saved.steps.length}. Můžeš navázat přesně tam.</p>
        <button type="button" class="btn primary big" id="resume">Pokračovat v lekci</button><button type="button" class="btn quiet" id="drop">Zahodit a začít znovu</button></section>` : ''}
      ${broken && !doneToday ? `<p class="warn-note">Vítej zpátky. Dnes začíná nová série.</p>` : ''}
      <section class="card">
        ${finished ? `<div class="kicker">Kurz dokončen</div><h1>Všech ${TOTAL} lekcí máš za sebou</h1><p>Opakuj kartičky, dokud se ti budou nabízet. Lekce si můžeš projít znovu v Plánu.</p>`
        : `<div class="kicker">Týden ${u + 1} z ${U.length} · den ${d + 1} · úroveň ${st[2]}</div>${saved ? `<h2>${esc(unit.t)}</h2>` : `<h1>${esc(unit.t)}</h1>`}<p class="muted">${esc(unit.s)}</p><ul class="today-list">${items}</ul>`}
        ${doneToday && !finished ? `<p class="done-note">Dnešní lekce je hotová${mt >= GOAL ? ' a denní cíl splněný' : ''}. Když tě to chytlo, pokračuj další.</p>` : ''}
        ${buttons}
      </section>
      <section class="card">
        <div class="row spread"><h2>Docházka</h2><span class="streak"><strong>${streak}</strong> ${plural(streak, 'den', 'dny', 'dní')} v řadě</span></div>
        <div class="prog"><i style="width:${Math.min(100, Math.round(mt / GOAL * 100))}%"></i></div>
        <p class="muted">Dnes ${mt} z ${GOAL} minut.</p>
      </section>
      <details><summary>Docházka podrobně</summary><div class="dbody">
        <div class="stats"><div class="stat"><strong>${week}/7</strong><span>dní za poslední týden</span></div>
        <div class="stat"><strong>${S.best || 0}</strong><span>nejdelší série</span></div>
        <div class="stat"><strong>${total >= 120 ? Math.round(total / 60) + ' h' : total + ' min'}</strong><span>učení celkem</span></div></div>
        <div class="cal">${cal}</div>
        <p class="muted small">Posledních 28 dní, dnešek je vpravo dole. Plné políčko znamená aspoň ${GOAL} minut, světlé kratší učení, šedé den bez učení. Počítá se jen čas, kdy opravdu odpovídáš, a jen dokončené lekce.</p>
      </div></details>
      <details><summary>Mapa celého roku</summary><div class="dbody">
        <p>${S.done} z ${TOTAL} lekcí · ${n} ${plural(n, 'slovíčko', 'slovíčka', 'slovíček')}</p><div class="year">${cells}</div>
        <p class="muted small">Jedno políčko je jeden týden. Úrovně: ${STAGES.map(s => `od ${s[0] + 1}. týdne ${s[1].toLowerCase()} (${s[2]})`).join(', ')}.</p>
      </div></details>
      ${!canSpeak ? '<p class="muted">Tento prohlížeč neumí číst anglický text nahlas, takže diktát a poslech se přeskočí. Hlas funguje v Chromu, Edge a Safari.</p>' : ''}`;
    const on = (id, fn) => { const b = document.getElementById(id); if (b) b.onclick = fn; };
    on('go', () => startLesson(S.done, true)); on('practice', startPractice); on('quick', startQuick);
    on('resume', () => resume(saved)); on('drop', () => { clearSes(); show('dnes'); });
  },
  plan() {
    const cur = Math.floor(S.done / 7);
    view.innerHTML = `<h1>Plán kurzu</h1><p class="muted">${U.length} týdnů po šesti lekcích a testu (T). Hotové lekce si můžeš kliknutím zopakovat.</p>` + U.map((unit, u) => {
      const st = STAGES.find(s => s[0] === u);
      const head = st ? `<h3 class="unit">Od ${u + 1}. týdne · ${st[1]} · úroveň ${st[2]}</h3>` : '';
      if (u > cur) return head + `<div class="locked"><span class="kicker">Týden ${u + 1}</span><span>${esc(unit.t)}</span></div>`;
      let days = '';
      for (let d = 0; d < 7; d++) {
        const i = u * 7 + d, cls = i < S.done ? 'done' : (i === S.done ? 'now' : '');
        days += `<button type="button" class="${cls}" data-l="${i}" ${i > S.done ? 'disabled' : ''} aria-label="Týden ${u + 1}, ${d === 6 ? 'test' : 'den ' + (d + 1)}">${d === 6 ? 'T' : d + 1}</button>`;
      }
      return head + `<section class="card"><div class="row spread"><span class="kicker">Týden ${u + 1}</span>${S.tests[u] != null ? `<span class="lvl ${S.tests[u] >= 70 ? 'ok' : ''}">test ${S.tests[u]} %</span>` : ''}</div>
        <h2>${esc(unit.t)}</h2><p class="muted small">${unit.grammar.map(g => esc(g.t)).join(' · ')}</p><div class="days">${days}</div></section>`;
    }).join('');
    view.querySelectorAll('.days button').forEach(b => b.onclick = () => { const i = +b.dataset.l; startLesson(i, i === S.done); });
  },
  slovicka() {
    const ws = learned().sort((a, b) => a.en.toLowerCase() < b.en.toLowerCase() ? -1 : 1);
    const due = dueCards(9999).length;
    view.innerHTML = `<h1>Slovíčka</h1>` + (ws.length ? `
      <p class="muted">Máš ${ws.length} ${plural(ws.length, 'slovíčko', 'slovíčka', 'slovíček')}. Kartičky se vracejí za 1, 2, 4, 7, 14, 30 a 60 dní, vždy když je znáš. Když ne, začínají znovu.</p>
      <button type="button" class="btn primary big" id="practice">Procvičit kartičky${due ? ' (' + due + ' k opakování)' : ''}</button>
      <input class="search" id="q" type="search" placeholder="Hledat anglicky nebo česky" aria-label="Hledat slovíčko">
      <ul class="wlist" id="wl"></ul>` : `<p class="muted">Zatím tu nic není. Po první lekci se tu objeví tvých prvních 8 slovíček.</p>`);
    if (!ws.length) return;
    const list = document.getElementById('wl');
    const draw = f => {
      f = f.toLowerCase();
      const hit = ws.filter(w => !f || w.en.toLowerCase().includes(f) || w.cz.toLowerCase().includes(f));
      list.innerHTML = hit.slice(0, 200).map(w => {
        const b = S.cards[w.id].b;
        return `<li>${spkBtn(w.en) || '<span></span>'}<span class="en">${esc(w.en)}${w.pr ? ` <span class="muted small">[${esc(w.pr)}]</span>` : ''}</span><span class="lvl ${b >= 4 ? 'ok' : ''}">${b >= 4 ? 'umím' : (b >= 1 ? 'učím se' : 'nové')}</span><span class="cz">${esc(w.cz)}</span></li>`;
      }).join('') + (hit.length > 200 ? `<li><span></span><span class="muted">a dalších ${hit.length - 200}. Zúž hledání.</span></li>` : '') || '<li><span></span><span class="muted">Nic nenalezeno.</span></li>';
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
      <section class="card"><h2>Velikost písma</h2>${fsButtons()}</section>
      <section class="card"><h2>Psaní na klávesnici</h2><p class="muted small">Když se ti na telefonu špatně píše, můžeš místo psaní skládat věty ze slov a vybírat z možností.</p>
        <select id="nt" aria-label="Způsob odpovídání"><option value="0">Odpovědi píšu na klávesnici</option><option value="1">Raději skládám ze slov a vybírám</option></select></section>
      <section class="card"><h2>Rychlost hlasu</h2><div class="row"><select id="rate" aria-label="Rychlost hlasu"><option value="0.7">Pomalu</option><option value="0.85">Mírně zpomaleně</option><option value="1">Normálně</option></select>${spkBtn('Hello, how are you today?')}</div></section>
      <section class="card"><h2>Přenos postupu na jiné zařízení</h2><p class="muted small">Postup se ukládá jen v tomto prohlížeči. Chceš-li pokračovat jinde, zkopíruj kód sem a vlož ho v nastavení na druhém zařízení. Kód si občas ulož i jako zálohu.</p>
        <textarea class="code" id="exp" readonly aria-label="Kód s tvým postupem">${esc(code)}</textarea><button type="button" class="btn" id="copy">Zkopírovat kód</button>
        <textarea class="code" id="imp" placeholder="Sem vlož kód z druhého zařízení" aria-label="Kód k načtení"></textarea><button type="button" class="btn" id="load">Načíst postup z kódu</button><p class="small" id="msg" role="status"></p></section>
      <section class="card"><h2>Začít od začátku</h2><p class="muted small">Smaže všechny lekce, kartičky i docházku v tomto prohlížeči.</p><div id="rs"><button type="button" class="btn danger" id="reset">Smazat postup</button></div></section>`;
    bindFs(() => show('nastaveni'));
    const nt = document.getElementById('nt'); nt.value = S.noType ? '1' : '0';
    nt.onchange = () => { S.noType = nt.value === '1'; save(); };
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

function intro(i) {
  document.body.classList.add('insession');
  const pages = [
    ['Vítej', `<p>Každý den tě čeká jedna lekce na zhruba 20 minut: opakování, 8 nových slovíček, kousek gramatiky, věty a výslovnost.</p><p>Na úvodní obrazovce vždy stačí stisknout jedno velké tlačítko. Lekci můžeš kdykoli přerušit a dokončit později.</p>`],
    ['Zapni si zvuk', `<p>Slovíčka a věty ti aplikace čte nahlas. Zkus si to:</p>${playRow('Hello, how are you today?') || '<p class="muted">V tomto prohlížeči hlas nefunguje. Zkus Chrome, Edge nebo Safari.</p>'}<p class="muted">Nic neslyšíš? Zkontroluj hlasitost a tichý režim telefonu. Tlačítko Pomalu přehraje totéž zpomaleně.</p>`],
    ['Jak velké písmo ti vyhovuje?', `${fsButtons()}<div class="card wordcard"><div class="en">good morning</div><div class="cz">dobré ráno</div></div><p class="muted">Velikost můžeš kdykoli změnit v Nastavení.</p>`]
  ];
  view.innerHTML = `<div class="step" style="padding-top:28px"><div class="kicker">Krok ${i + 1} ze ${pages.length}</div><div class="body"><h1>${pages[i][0]}</h1>${pages[i][1]}</div>
    <button type="button" class="btn primary big" id="nx">${i < pages.length - 1 ? 'Pokračovat' : 'Hotovo, jdeme na to'}</button></div>`;
  bindFs(() => intro(i));
  document.getElementById('nx').onclick = () => {
    if (i < pages.length - 1) return intro(i + 1);
    S.intro = 1; save(); document.body.classList.remove('insession'); show('dnes');
  };
  window.scrollTo(0, 0);
}
function show(tab) {
  if (!S.intro) return intro(0);
  if (!V[tab]) tab = 'dnes';
  tabs.querySelectorAll('button').forEach(b => { if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  V[tab]();
  window.scrollTo(0, 0);
}
tabs.addEventListener('click', e => { const b = e.target.closest('button[data-tab]'); if (b) show(b.dataset.tab); });
document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say, !!b.dataset.slow); });
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
