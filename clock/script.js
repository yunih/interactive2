let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')

let minutesTenDigit = document.querySelector('#minutes-tenPlace')
let minutesOneDigit = document.querySelector('#minutes-onePlace')


let secondsTenDigit = document.querySelector('#seconds-tenPlace')
let secondsOneDigit = document.querySelector('#seconds-onePlace')

let hours = document.querySelector('#hour')

console.dir(minutesTenDigit)
console.dir(secondsTenDigit)

// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){
  
  // get the date object
  
  let d = new Date();

  // get hours, minutes, and seconds from the date object
  
  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());




  let nows = document.querySelectorAll('.now')

  for(let counter = 0; counter < nows.length; counter ++){
    
    nows[counter].classList.remove('now')
  }



  // minutes stuff

  let mString = m + ''

  let tensPlace = mString[0]
  let onesPlace = mString[1]

  



  minutesTenDigit.children[tensPlace].classList.add('now')
  minutesOneDigit.children[onesPlace].classList.add('now')

  // end minute stuff



  // seconds stuff

  let sString = s + ''

  tensPlace = sString[0]
  onesPlace = sString[1]

  



  secondsTenDigit.children[tensPlace].classList.add('now')
  secondsOneDigit.children[onesPlace].classList.add('now')

  // end second stuff

  // hour stuff


  let hourIndex = h - 1
  if(h >= 12){
    hourIndex = hourIndex - 12
  }
  if(hourIndex === -1){
    hourIndex = 11
  }


  hours.children[hourIndex].classList.add('now')





let amOrPM = 'am'

if(h >= 12){
  amOrPM = 'pm'
}
console.log(amOrPM)






  // update the clock's text with our time vars
  
  let timeText = h + ":" + m + ":" + s
  timeEl.innerText = timeText

  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
  secondHand.style.transform = 'rotate('+ s * 6 +'deg)'  
  
  // detect if its a minute divisible by 5
  
  if(m % 5 == 0){
  	clockEl.classList.add('aFiveMinute');
  } else {
  	clockEl.classList.remove('aFiveMinute');
  }
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}





