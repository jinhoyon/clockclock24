(function() {
const now = new Date();

const hoursNow = now.getHours() % 12 || 12; 
const minutesNow = now.getMinutes();

let hours = document.querySelectorAll('.hour_hand');
let minutes = document.querySelectorAll('.minute_hand');

switch (hoursNow) {
    case 1:
        hours.forEach(hour => {
            hour.style.transform = 'rotate(135deg)';
        });
        minutes.forEach(minute => {
            minute.style.transform = 'rotate(135deg)';
        });
        break;
    case 2:
        break;
    case 3:

        break;
    case 4:

        break;
    case 6:

        break;
    case 7:

        break;
    case 8:
        // rotate hours hand
        hours.forEach(hour => {
            hour.style.transform = 'rotate(150deg)';
        });
        minutes.forEach(minute => {
            minute.style.transform = 'rotate(270deg)';
        });
        break;
    case 9:

        break;
    case 10:

        break;
    case 11:

        break;
    case 12:

        break;
    default:

}

console.log(`Current time: ${hoursNow}:${minutesNow}`);

})();