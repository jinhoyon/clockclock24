(function () {
    // Current Date
    const now = new Date();

    // const hoursNow = now.getHours() % 12 || 12;
    const hoursNow = 2;
    const minutesNow = now.getMinutes();

    // Columns
    const columnOne = document.querySelector("#column_one");
    const columnTwo = document.querySelector("#column_two");
    const columnThree = document.querySelector("#column_three");
    const columnFour = document.querySelector("#column_four");

    let clockOne, clockTwo, clockThree;
    let hourHand, minuteHand;
    
    // helper to set clocks from column
    function setClocks(column) {
        clockOne = column.querySelector(".clock_one");
        clockTwo = column.querySelector(".clock_two");
        clockThree = column.querySelector(".clock_three");
    }
 
    // helper to set a clock's hands
    function setClockHands(clock, hourDegrees, minuteDegrees) {
        hourHand = clock.querySelector('.hour_hand');
        minuteHand = clock.querySelector('.minute_hand');
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    }

    function setIdle() {
        setClocks(columnThree);
        setClockHands(clockOne, 135, 135);
        setClockHands(clockTwo, 135, 135);
        setClockHands(clockThree, 135, 135);
    }

    function setZero(){
        // Column 1
        setClocks(columnOne);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 270, 0);

        // Column 2
        setClocks(columnTwo);
        setClockHands(clockOne, 90, 180);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 270, 180);
    }

    function setOne() {
        setIdle();
        setClocks(columnFour);
        setClockHands(clockOne, 90, 90);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 270, 270);
    }

    function setTwo() {
        setClocks(columnThree);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockTwo, 90, 0);
        setClockHands(clockThree, 270, 0);

        setClocks(columnFour);
        setClockHands(clockOne, 180, 90);
        setClockHands(clockTwo, 180, 270);
        setClockHands(clockThree, 180, 180);
    }

    switch (hoursNow) {
        case 1:
            setZero();
            setOne();


            break;
        case 2:
            setZero();
            setTwo();
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
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
