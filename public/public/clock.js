/* eslint-env jquery */
// set the date we're counting down to
const targetDate = new Date('July, 1, 2047').getTime();
function padDigits(number, digits) {
  return (
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
  );
}
// variables for time units
let days;
let hours;
let minutes;
let seconds;
let years;
const nol = function(h) {
  return h > 9 ? h : `0${h}`;
};
const nol3 = function(h) {
  return padDigits(h, 3);
};
// update the tag with id "countdown" every 1 second
setInterval(() => {
  // find the amount of "seconds" between now and target
  const currentDate = new Date().getTime();
  let secondsLeft = (targetDate - currentDate) / 1000;
  years = parseInt(secondsLeft / 31536000, 10);
  secondsLeft %= 31536000;
  // do some time calculations
  days = parseInt(secondsLeft / 86400, 10);
  secondsLeft %= 86400;
  hours = parseInt(secondsLeft / 3600, 10);
  secondsLeft %= 3600;
  minutes = parseInt(secondsLeft / 60, 10);
  seconds = parseInt(secondsLeft % 60, 10);
  // format countdown string + set tag value
  // countdown.innerHTML = '<span class="years">' + years +  ' <b>年</b></span> ' + '<span class="days">' + days +  ' <b>日</b></span> <span class="hours">' + hours + ' <b>小時</b></span> <span class="minutes">'
  // + minutes + ' <b>分鐘</b></span> <span class="seconds">' + seconds + ' <b>秒</b></span>';
  jQuery('#count_down_second').flipcountdown({
    size: 'xs',
    tick: nol(seconds),
  });
  jQuery('#count_down_min').flipcountdown({ size: 'xs', tick: nol(minutes) });
  jQuery('#count_down_hour').flipcountdown({ size: 'xs', tick: nol(hours) });
  jQuery('#count_down_day').flipcountdown({ size: 'xs', tick: nol3(days) });
  jQuery('#count_down_year').flipcountdown({ size: 'xs', tick: nol(years) });
}, 1000);
