(function () {
    // Current Date
    const now = new Date();

    // const hoursNow = now.getHours() % 12 || 12;
    const hoursNow = 9;
    const minutesNow = now.getMinutes();

    // Columns
    const columnOne = document.querySelector("#column_one");
    const columnTwo = document.querySelector("#column_two");
    const columnThree = document.querySelector("#column_three");
    const columnFour = document.querySelector("#column_four");
    const columnFive = document.querySelector("#column_five");
    const columnSix = document.querySelector("#column_six");
    const columnSeven = document.querySelector("#column_seven");
    const columnEight = document.querySelector("#column_eight");

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

    function setZero() {
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

    function setThree() {
        setClocks(columnThree);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockTwo, 0, 0);
        setClockHands(clockThree, 0, 0);

        setClocks(columnFour);
        setClockHands(clockOne, 180, 90);
        setClockHands(clockTwo, 180, 270);
        setClockHands(clockThree, 180, 270);
    }

    function setFour() {
        setClocks(columnThree);
        setClockHands(clockOne, 90, 90);
        setClockHands(clockTwo, 270, 0);
        setClockHands(clockThree, 135, 135);

        setClocks(columnFour);
        setClockHands(clockOne, 90, 90);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 270, 270);
    }

    function setFive() {
        setClocks(columnThree);
        setClockHands(clockOne, 0, 90);
        setClockHands(clockTwo, 270, 0);
        setClockHands(clockThree, 0, 0);

        setClocks(columnFour);
        setClockHands(clockOne, 180, 180);
        setClockHands(clockTwo, 90, 180);
        setClockHands(clockThree, 180, 270);
    }

    function setSix() {
        setClocks(columnThree);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockTwo, 270, 90);
        setClockHands(clockThree, 270, 0);

        setClocks(columnFour);
        setClockHands(clockOne, 180, 180);
        setClockHands(clockTwo, 180, 90);
        setClockHands(clockThree, 270, 180);
    }
    function setSeven() {
        setClocks(columnThree);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockTwo, 135, 135);
        setClockHands(clockThree, 135, 135);

        setClocks(columnFour);
        setClockHands(clockOne, 180, 90);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 270, 270);
    }

    function setEight() {
        setClocks(columnThree);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockTwo, 0, 270);
        setClockHands(clockThree, 0, 270);

        setClocks(columnFour);
        setClockHands(clockOne, 90, 180);
        setClockHands(clockTwo, 180, 270);
        setClockHands(clockThree, 180, 270);
    }

    function setNine() {
        setClocks(columnThree);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockTwo, 0, 270);
        setClockHands(clockThree, 0, 0);

        setClocks(columnFour);
        setClockHands(clockOne, 90, 180);
        setClockHands(clockTwo, 90, 270);
        setClockHands(clockThree, 180, 270);
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
            setZero();
            setThree();

            break;
        case 4:
            setZero();
            setFour();
            break;
        case 5:
            setZero();
            setFive();
            break;
        case 6:
            setZero();
            setSix();
            break;
        case 7:
            setZero();
            setSeven();
            break;
        case 8:
            setZero();
            setEight();
            break;
        case 9:
            setZero();
            setNine();
            setThreeMin();
            setFiveMin();
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        default:
    }

    // console.log(`Current time: ${hoursNow}:${minutesNow}`);
})();
