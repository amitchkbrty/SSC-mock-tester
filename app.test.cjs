const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = new Map();
function element(id = '') {
  const classes = new Set();
  return { id, value: '', textContent: '', children: [], disabled: false,
    get innerHTML() { return this._html || ''; }, set innerHTML(value) { this._html = value; this.children = []; },
    style: {}, selectedOptions: [{ textContent: 'Test filter' }],
    classList: { add: (...xs) => xs.forEach(x => classes.add(x)), remove: (...xs) => xs.forEach(x => classes.delete(x)), toggle: (x, on) => on ? classes.add(x) : classes.delete(x), contains: x => classes.has(x) },
    appendChild(child) { this.children.push(child); }, addEventListener() {} };
}
const storage = new Map();
let now = 100000;
class TestDate extends Date { static now() { return now; } }
const context = vm.createContext({ console, Date: TestDate, Math, Set, Map,
  document: { 
    documentElement: { dataset: {} },
    getElementById(id) { if (!elements.has(id)) elements.set(id, element(id)); return elements.get(id); }, 
    createElement: () => element() 
  },
  matchMedia: () => ({ matches: false }),
  localStorage: { getItem: k => storage.get(k) || null, setItem: (k,v) => storage.set(k,v), removeItem: k => storage.delete(k) },
  window: { scrollTo() {} }, confirm: () => true, setInterval: () => 1, clearInterval() {}, setTimeout() {} });
const run = code => vm.runInContext(code, context);
const val = (id, value) => { context.document.getElementById(id).value = value; };
for (const id of ['practice-year','practice-shift','practice-exam']) val(id, 'all');
val('practice-subject', 'Quant');val('pyq-shift', '1');val('pyq-day', '1');val('pyq-count','100');
run(readFileSync('question-data.js','utf8'));
run(readFileSync('index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1]);
assert.equal(run('ADDITIONAL_QUESTIONS.length'), 537);
assert(run('questionBank.every(q=>q.practiceYear>=2017&&q.practiceYear<=2026)'));
assert(run('ADDITIONAL_QUESTIONS.every(q=>q.opts.length===4&&new Set(q.opts).size===4&&q.ans>=0&&q.ans<4&&q.exams.length>0)'));
assert.equal(elements.get('pyq-years').children.length,10);
for (const [tier, count, subjects, seconds] of [['tier1',100,'Reasoning,GK,Quant,English','900,900,900,900'],['tier2',150,'Quant,Reasoning,English,GK,Computer','1800,1800,2400,1200,900']]) {
  run(`startTest('${tier}')`);
  assert.equal(run('activeQuestions.length'),count);
  assert.equal(run('examSections.map(s=>s.subject).join(",")'),subjects);
  assert.equal(run('examSections.map(s=>s.seconds).join(",")'),seconds);
  assert.equal(run('activeQuestions[currentIndex].subject===activeSubjectTab'),true);
  assert(run('document.getElementById("subject-tabs-bar").children.slice(1).every(b=>b.disabled)'));
  run('selectOption(0)'); const previous = run('currentIndex');
  now += run('examSections[0].seconds') * 1000;
  run('tickTimer()');assert.equal(run('sectionIndex'),1);
  run('prevQ()');assert.notEqual(run('currentIndex'),previous);
  assert(run('activeQuestions[currentIndex].subject===activeSubjectTab'));
  run('finishSectionEarly()');assert.equal(run('sectionIndex'),2);
  now += 10000000;run('tickTimer()');
  assert.equal(run('examRunning'),false);assert.equal(run('currentView'),'result');
  assert.equal(run('attemptHistory[0].reviewItems.length'),count);
  const limits = seconds.split(',').map(Number);
  assert.equal(run('attemptHistory[0].timeUsed'), limits.reduce((a,b)=>a+b,0)-limits[1]);
  const historyCount = run('attemptHistory.length');run('submitExam()');assert.equal(run('attemptHistory.length'),historyCount);
}
val('practice-subject','Quant');val('practice-exam','MTS');val('practice-year','2026');val('practice-shift','1');
assert(run('practicePool().length>0'));
assert(run('practicePool().every(q=>q.practiceYear===2026&&q.shift===1&&q.exams.includes("MTS")&&q.subject==="Quant")'));
val('practice-exam','Steno');assert.equal(run('practicePool().length'),0);
val('practice-subject','Current Affairs');val('practice-exam','all');assert.equal(run('practicePool().length'),0);
run('updatePracticeCount()');assert.equal(elements.get('practice-start').disabled,true);
run('switchTab("home");openSubject("English");goBack()');assert.equal(run('currentView'),'home');
run('pyqYear=2026;setPyqTier("tier2");startPyqSet()');
assert(run('activeQuestions.every(q=>q.practiceYear===2026&&q.shift===1&&q.day===1)'));
assert(run('activeQuestions.length<150'));
run('switchTab("home")');assert.equal(run('examRunning'),false);
console.log('Passed: archive range, question validity, both tier blueprints, timed locks and expiry, single submission, strict filters, empty states, Home/Back, and strict small archive sets.');
