const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const ampmEl = document.getElementById('ampm');
const dayEl = document.getElementById('day');

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function setNum(el, value) {
  const text = String(value);
  if (el.textContent === text) return;
  el.textContent = text;
  el.classList.remove('flip');
  void el.offsetWidth;
  el.classList.add('flip');
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  setNum(hoursEl, h);
  setNum(minutesEl, String(now.getMinutes()).padStart(2, '0'));
  ampmEl.textContent = ampm;
  dayEl.textContent = DAYS[now.getDay()];
}

updateClock();
setInterval(updateClock, 1000);
