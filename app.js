const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date(2023, 1, 1, 01, 10, 00);
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
tempMonth = months[tempMonth];
let tempDay = tempDate.getDate();
let tempHours = tempDate.getHours();
let tempMinutes = tempDate.getMinutes();

const weekday = weekdays[tempDate.getDay()];
function format(i) {
  if (i < 10) {
    return (i = `0${i}`);
  }
  return i;
}
giveaway.textContent = `giveaway ends on ${weekday}, ${format(
  tempDay
)} ${tempMonth} ${tempYear} ${format(tempHours)}:${format(tempMinutes)}am`;

const futureTime = tempDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //calculo de un dia en ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
