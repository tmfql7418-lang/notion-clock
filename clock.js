const ampmEl = document.getElementById('ampm');
const dayEl = document.getElementById('day');
const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function makeFlipper(numEl, initial) {
  const card = numEl.parentElement;
  numEl.remove();
  let cur = String(initial);
  let timer = null;

function part(cls) {
  const d = document.createElement('div');
  d.className = cls;
  const n = document.createElement('span');
  n.className = 'n';
  n.textContent = cur;
  d.appendChild(n);
  card.appendChild(d);
  return d;
}
  function setText(d, t) { d.firstChild.textContent = t; }

const top = part('half top');
  const bottom = part('half bottom');
  const front = part('half flap front');
  const back = part('half flap back');

return function (next) {
  next = String(next);
  if (next === cur) return;
  clearTimeout(timer);
  card.classList.remove('flipping');
  setText(top, next);
  setText(bottom, cur);
  setText(front, cur);
  setText(back, next);
  void card.offsetWidth;
  card.classList.add('flipping');
  timer = setTimeout(function () {
    setText(top, next);
    setText(bottom, next);
    setText(front, next);
    setText(back, next);
    card.classList.remove('flipping');
  }, 650);
  cur = next;
};
}

function getTime() {
  const now = new Date();
  let h = now.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return { h: h, m: String(now.getMinutes()).padStart(2, '0'), ampm: ampm, day: DAYS[now.getDay()] };
}

const t0 = getTime();
const flipHours = makeFlipper(document.getElementById('hours'), t0.h);
const flipMinutes = makeFlipper(document.getElementById('minutes'), t0.m);
ampmEl.textContent = t0.ampm;
dayEl.textContent = t0.day;

setInterval(function () {
  const t = getTime();
  flipHours(t.h);
  flipMinutes(t.m);
  ampmEl.textContent = t.ampm;
  dayEl.textContent = t.day;
}, 1000);
