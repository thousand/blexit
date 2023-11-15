const SEC = 1000;
const MIN = SEC * 60;
const HR  = MIN * 60;
const DAY = HR  * 24;

const END = new Date("2023-11-18T01:00:00.000Z");


const container = document.querySelector('.fire');
const daysEl = document.querySelector('.days');
const hrsEl  = document.querySelector('.hrs');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');

function update() {
  const diff = END.valueOf() - Date.now();
  
  const numDays = formatNum(diff / DAY, ' '); 
  daysEl.innerText = numDays;
  const numHrs = formatNum((diff % DAY) / HR);
  hrsEl.innerText = numHrs;
  const numMins = formatNum((diff % HR) / MIN);
  minsEl.innerText = numMins;
  const numSecs = formatNum((diff % MIN) / SEC);
  secsEl.innerText = numSecs;
  
  container.classList.toggle('blink');
}

function formatNum(num, char = '0') {
  return Math.floor(num).toString().padStart(2, char);
}

update();
setInterval(update, 1000);