
// console.log(countDownDate);

setInterval("runClock()", 1000);

var is24HourFormat = true;

function runClock() {
  var now = new Date();
  var today= new Date();
  // console.log(now);

  var months = ['JANUARY', 'FEBRURY', 'MARCH', 'APRIL',
                'MAY', 'JUNE', 'JULY', 'AUSGUST', 'SEPTEMBER',
                'OCTOBER', 'NOVEMBER', 'DECEMBER'];

  // console.log("distance: " + distance);
  var weekdays = ['SUNDAY', 'MoMONDAY', 'TUESDAY', 'WENESDAY', 'THURDAY', 'FRIDAY', 'SATURADAY'];

  var days = Math.floor(now / (1000 * 60 * 60 * 24));
  var hours = today.getHours();
  var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((now % (1000 * 60)) / 1000);

  console.log("days = " + days);
  console.log("hours = " + hours);
  console.log("minutes = " + minutes);
  console.log("seconds = " + seconds);
  var session = ['PM' , 'AM', ""];
  var sec =2;

  if (is24HourFormat) {
    // convert to 24-hour format
    
    sec=2;
    hours = (hours % 12) + 12;
    
} else {
    // convert to 12-hour format
    hours = (hours + 11) % 12 + 1;
    if( hours > 12){
        sec=1;
    }else{
        sec=0;
    }

}
  document.getElementById("date").innerHTML = months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear() ;
  document.getElementById("day").innerHTML = weekdays[today.getDay()];
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = today.getMinutes();
  document.getElementById("seconds").innerHTML = today.getSeconds();
  document.getElementById("session").innerHTML = session[sec];



}
function changeFormat(){
    if (is24HourFormat) {
        is24HourFormat = false;
    } else {
        is24HourFormat = true;
    }
}
