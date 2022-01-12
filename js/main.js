const hourArrow = document.querySelector('.arrow-hours');
const minuteArrow = document.querySelector('.arrow-minutes');
const secondArrow = document.querySelector('.arrow-seconds');
const msecArrow = document.querySelector('.arrow-msec');
const clock = document.querySelector('.clock');

const logo = document.querySelector('.logo-holder svg');

const digitalHours = document.querySelector('.digital-hours');
const digitalMinutes = document.querySelector('.digital-minutes');
const digitalSeconds = document.querySelector('.digital-seconds');
const digitalDay = document.querySelector('.weekday');
const digitalMonth = document.querySelector('.month');


let getTime = () => {
    const now = new Date();

    //get m-seconds
    // const mSeconds = now.getMilliseconds();
    // const mSecondsDegree = mSeconds * 0.36;
    // msecArrow.style.transform = `rotate(${mSecondsDegree}deg)`;  
    
    //get seconds
    let seconds = now.getSeconds();
    seconds += 1;
    
    const secondsDegree = seconds * 6;

    let dataSeconds = secondArrow.getAttribute('data-seconds'); // get attr
    secondArrow.setAttribute('data-seconds', `${secondsDegree}`); // set attr

    if (secondsDegree !== dataSeconds) {
        secondArrow.style.transform = `rotate(${secondsDegree}deg)`; 
    }

    // if (secondArrow.style.transform !== `rotate(${secondsDegree}deg)`) {
    //     secondArrow.style.transform = `rotate(${secondsDegree}deg)`;   
    // }

    let dataDigiSeconds = digitalSeconds.getAttribute('data-digi-seconds'); // get attr
    digitalSeconds.setAttribute('data-digi-seconds', `${seconds}`); // set attr

    if (dataDigiSeconds !== seconds) {
        digitalSeconds.innerHTML = seconds;     
    }
    
    // if (digitalSeconds.innerHTML !== seconds) {
    //     digitalSeconds.innerHTML = seconds;     
    // }

    if (secondArrow.style.transform === `rotate(0deg)` || 
        secondArrow.style.transform === `rotate(180deg)`) {
        logo.style = 'opacity:100%; transition: opacity 0.3s;';
    }   else {
        logo.style = 'opacity:60%; transition: opacity 3s';
    }    
    if (seconds >= 0 && seconds <= 9) {
        digitalSeconds.innerHTML = `0${seconds}`
    }

    //get minutes
    const minutes = now.getMinutes();
    const minutesDegree = minutes  * 6;
    
    let dataMinutes = minuteArrow.getAttribute('data-minutes'); // get attr
    minuteArrow.setAttribute('data-minutes', `${minutesDegree}`); // set attr

    if (minutesDegree !== dataMinutes) {
        minuteArrow.style = `transform: rotate(${minutesDegree + (secondsDegree / 60)}deg);`;
    }

    // if (minuteArrow.style !== `transform: rotate(${minutesDegree + (secondsDegree / 60)}deg)`) {
    //     minuteArrow.style = `transform: rotate(${minutesDegree + (secondsDegree / 60)}deg);`;
    // }

    let dataDigiMinutes = digitalMinutes.getAttribute('data-digi-minutes'); // get attr
    digitalMinutes.setAttribute('data-digi-minutes', `${minutes}`); // set attr

    if (dataDigiMinutes != minutes) {
        digitalMinutes.innerHTML = minutes;
    }

    if (minutes >= 0 && minutes <= 9) {
        digitalMinutes.innerHTML = `0${minutes}`
    }

    //get hours
    let hours = now.getHours();
    let hoursDigit = now.getHours();
    
    hours === 15 ? hours = 3 :
    hours === 16 ? hours = 4 :
    hours === 17 ? hours = 5 :
    hours === 18 ? hours = 6 :
    hours === 19 ? hours = 7 :
    hours === 20 ? hours = 8 :
    hours === 21 ? hours = 9 :
    hours === 22 ? hours = 10 :
    hours === 23 ? hours = 11 :
    hours === 24 ? hours = 12 : hours

    let hoursDegree = hours * 30;
    let dataHours = hourArrow.getAttribute('data-hours'); // get attr
    hourArrow.setAttribute('data-hours', `${hoursDegree}`); // set attr

    if (hoursDegree !== dataHours) {
        hourArrow.style = `transform: rotate(${hoursDegree + (minutesDegree / 12)}deg);`;
    }

    // if (hourArrow.style !== `transform: rotate(${hoursDegree + (minutesDegree / 12)}deg);`) {
    //     hourArrow.style = `transform: rotate(${hoursDegree + (minutesDegree / 12)}deg);`;
    // }

    let dataDigiHours = digitalHours.getAttribute('data-digi-hours'); // get attr
    digitalHours.setAttribute('data-digi-hours', `${hoursDigit}`); // set attr

    if (dataDigiHours != hoursDigit) {
        digitalHours.innerHTML = hoursDigit;
    }

    // if (digitalHours.innerHTML !== hoursDigit) {
    //     digitalHours.innerHTML = hoursDigit;  
    // }

    if (hoursDigit >= 0 && hoursDigit <= 9) {
        digitalHours.innerHTML = `0${hoursDigit}`
    }

    // get day
    const weekDays = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
    ]

    let weekDay = now.getDay();    

    let dataWeekday = digitalDay.getAttribute('data-weekday'); // get attr
    digitalDay.setAttribute('data-weekday', `${weekDays[weekDay - 1]}`); // set attr

    if (weekDays[weekDay - 1] !== dataWeekday) {
        digitalDay.innerHTML = weekDays[weekDay - 1];   
    }

    // if (digitalDay.innerHTML !== weekDays[weekDay - 1]) {
    //     digitalDay.innerHTML = weekDays[weekDay - 1];   
    // }

    // get month
    const months = [
        "JAN", 
        "FEB", 
        "MAR", 
        "APR", 
        "MAY", 
        "JUN", 
        "JUL", 
        "AUG", 
        "SEP", 
        "OCT", 
        "NOV", 
        "DEC"
    ]
    
    let month = now.getMonth();    

    let dataMonth = digitalMonth.getAttribute('data-month'); // get attr
    digitalMonth.setAttribute('data-month', `${months[month]}`); // set attr

    if (dataMonth !== months[month]) {
        digitalMonth.innerHTML = months[month];   
    }

    // if(digitalMonth.innerHTML !== months[month]) {
    //     digitalMonth.innerHTML = months[month];  
    // }
}
getTime()
setInterval(getTime, 1000);