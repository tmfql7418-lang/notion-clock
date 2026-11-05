const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const ampmEl = document.getElementById('ampm');
const dayEl = document.getElementById('day');

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  hoursEl.textContent = h;
  minutesEl.textContent = String(now.getMinutes()).padStart(2, '0');
  ampmEl.textContent = ampm;
  dayEl.textContent = DAYS[now.getDay()];
}

updateClock();
setInterval(updateClock, 1000);
