(function() {
const now = new Date();

// const hoursNow = now.getHours() % 12 || 12; 
const hoursNow = 1; 
const minutesNow = now.getMinutes();

const columnOne = document.querySelector('#column_one');
const columnTwo = document.querySelector('#column_two');
const columnThree = document.querySelector('#column_three');

const hourHand = document.querySelector('.hour_hand');
const minuteHand = document.querySelector('.minute_hand');

function idlePosition(column) {
    const clocks = column.querySelectorAll('.circle_one, .circle_two, .circle_three');
    clocks.forEach(clock => {
        const hourHand = clock.querySelector('.hour_hand');
        const minuteHand = clock.querySelector('.minute_hand');

        hourHand.style.transform = 'rotate(135deg)';
        minuteHand.style.transform = 'rotate(135deg)';
    });
}

function setPositions(column, hours, minutes) {
    const clocks = column.querySelectorAll('.circle_one, .circle_two, .circle_three');
    clocks.forEach(clock => {
        const hourHand = clock.querySelector('.hour_hand');
        const minuteHand = clock.querySelector('.minute_hand');
    });
}

function setHourOne(){
     // Column One
     idlePosition(columnOne);

     // Column Two
     // Clock One
     const clockOne = columnTwo.querySelector('.circle_one');
     let hourHand = clockOne.querySelector('.hour_hand');
     let minuteHand = clockOne.querySelector('.minute_hand');
     hourHand.style.transform = 'rotate(90deg)';
     minuteHand.style.transform = 'rotate(90deg)';

     // Clock Two
     const clockTwo = columnTwo.querySelector('.circle_two');
     hourHand = clockTwo.querySelector('.hour_hand');
     minuteHand = clockTwo.querySelector('.minute_hand');
     hourHand.style.transform = 'rotate(90deg)';
     minuteHand.style.transform = 'rotate(270deg)';

     // Clock Three
     const clockThree = columnTwo.querySelector('.circle_three');
     hourHand = clockThree.querySelector('.hour_hand');
     minuteHand = clockThree.querySelector('.minute_hand');
     hourHand.style.transform = 'rotate(270deg)';
     minuteHand.style.transform = 'rotate(270deg)';ww
}

function setHourTwo(){
    

}
switch (hoursNow) {
    case 1:
       setHourOne();

        break;
    case 2:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(-30deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 3:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(0deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 4:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(300deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 5:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(60deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 6:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(90deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 7:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(120deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 8:
        // rotate hours hand
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(150deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(270deg)';
        });
        break;
    case 9:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(180deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;  
    case 10:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(210deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 11:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(240deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    case 12:
        hoursOne.forEach(hour => {
            hour.style.transform = 'rotate(270deg)';
        });
        minutesOne.forEach(minute => {
            minute.style.transform = 'rotate(0deg)';
        });
        break;
    default:

}

console.log(`Current time: ${hoursNow}:${minutesNow}`);

})();