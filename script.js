// Columns
const columnOne = document.querySelector("#column_one");
const columnTwo = document.querySelector("#column_two");
const columnThree = document.querySelector("#column_three");
const columnFour = document.querySelector("#column_four");

let clockOne, clockTwo, clockThree;
let hourHand, minuteHand;

(function () {
    // helper to set clocks from column
    function setClocks(column) {
        clockOne = column.querySelector(".clock_one");
        clockTwo = column.querySelector(".clock_two");
        clockThree = column.querySelector(".clock_three");
        clockFour = column.querySelector(".clock_four");
        clockFive = column.querySelector(".clock_five");
        clockSix = column.querySelector(".clock_six");
    }

    // helper to set a clock's hands
    function setClockHands(clock, hourDegrees, minuteDegrees) {
        hourHand = clock.querySelector(".hour_hand");
        minuteHand = clock.querySelector(".minute_hand");
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    }

    function setZero(column) {
        setClocks(column);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockThree, 90, 270);
        setClockHands(clockFive, 270, 0);

        setClockHands(clockTwo, 90, 180);
        setClockHands(clockFour, 90, 270);
        setClockHands(clockSix, 270, 180);
    }

    function setOne(column) {
        setClocks(column);
        setClockHands(clockOne, 135, 135);
        setClockHands(clockThree, 135, 135);
        setClockHands(clockFive, 135, 135);

        setClockHands(clockTwo, 90, 90);
        setClockHands(clockFour, 90, 270);
        setClockHands(clockSix, 270, 270);
    }

    function setTwo(column) {
        setClocks(column);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockThree, 90, 0);
        setClockHands(clockFive, 270, 0);

        setClockHands(clockTwo, 180, 90);
        setClockHands(clockFour, 180, 270);
        setClockHands(clockSix, 180, 180);
    }

    function setThree(column) {
        setClocks(column);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockThree, 0, 0);
        setClockHands(clockFive, 0, 0);

        setClockHands(clockTwo, 180, 90);
        setClockHands(clockFour, 180, 270);
        setClockHands(clockSix, 180, 270);
    }

    function setFour(column) {
        setClocks(column);
        setClockHands(clockOne, 90, 90);
        setClockHands(clockThree, 270, 0);
        setClockHands(clockFive, 135, 135);

        setClockHands(clockTwo, 90, 90);
        setClockHands(clockFour, 90, 270);
        setClockHands(clockSix, 270, 270);
    }

    function setFive(column) {
        setClocks(column);
        setClockHands(clockOne, 0, 90);
        setClockHands(clockThree, 270, 0);
        setClockHands(clockFive, 0, 0);

        setClockHands(clockTwo, 180, 180);
        setClockHands(clockFour, 90, 180);
        setClockHands(clockSix, 180, 270);
    }

    function setSix(column) {
        setClocks(column);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockThree, 270, 90);
        setClockHands(clockFive, 270, 0);

        setClockHands(clockTwo, 180, 180);
        setClockHands(clockFour, 180, 90);
        setClockHands(clockSix, 270, 180);
    }

    function setSeven(column) {
        setClocks(column);
        setClockHands(clockOne, 0, 0);
        setClockHands(clockThree, 135, 135);
        setClockHands(clockFive, 135, 135);

        setClockHands(clockTwo, 180, 90);
        setClockHands(clockFour, 90, 270);
        setClockHands(clockSix, 270, 270);
    }

    function setEight(column) {
        setClocks(column);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockThree, 0, 270);
        setClockHands(clockFive, 0, 270);

        setClockHands(clockTwo, 90, 180);
        setClockHands(clockFour, 180, 270);
        setClockHands(clockSix, 180, 270);
    }

    function setNine(column) {
        setClocks(column);
        setClockHands(clockOne, 90, 0);
        setClockHands(clockThree, 0, 270);
        setClockHands(clockFive, 0, 0);

        setClockHands(clockTwo, 90, 180);
        setClockHands(clockFour, 90, 270);
        setClockHands(clockSix, 180, 270);
    }

    function setHour(currentHour) {
        // const currentHour = new Date().getHours() % 12 || 12;
        switch (currentHour) {
            case 1:
                setZero(columnOne);
                setOne(columnTwo);
                break;
            case 2:
                setZero(columnOne);
                setTwo(columnTwo);
                break;
            case 3:
                setZero(columnOne);
                setThree(columnTwo);
                break;
            case 4:
                setZero(columnOne);
                setFour(columnTwo);
                break;
            case 5:
                setZero(columnOne);
                setFive(columnTwo);
                break;
            case 6:
                setZero(columnOne);
                setSix(columnTwo);
                break;
            case 7:
                setZero(columnOne);
                setSeven(columnTwo);
                break;
            case 8:
                setZero(columnOne);
                setEight(columnTwo);
                break;
            case 9:
                setZero(columnOne);
                setNine(columnTwo);
                break;
            case 10:
                setOne(columnOne);
                setZero(columnTwo);
                break;
            case 11:
                setOne(columnOne);
                setOne(columnTwo);
                break;
            case 12:
                setOne(columnOne);
                setTwo(columnTwo);
                break;
            default:
        }
    }

    function setMinutes(digit, column) {
        switch (digit) {
            case 0:
                setZero(column);
                break;
            case 1:
                setOne(column);
                break;
            case 2:
                setTwo(column);
                break;
            case 3:
                setThree(column);
                break;
            case 4:
                setFour(column);
                break;
            case 5:
                setFive(column);
                break;
            case 6:
                setSix(column)
                break;
            case 7:
                setSeven(column);
                break;
            case 8:
                setEight(column);
                break;
            case 9:
                setNine(column);
                break;
            default:
        }
    }

    function updateTime() {
        const now = new Date();
        const currentHour = now.getHours() % 12 || 12;
        const currentMinute = now.getMinutes();
        const currentMinuteTensDigit = Math.floor(currentMinute / 10);
        const currentMinuteOnesDigit = currentMinute % 10;

        setHour(currentHour);
        setMinutes(currentMinuteTensDigit, columnThree);
        setMinutes(currentMinuteOnesDigit, columnFour);
    }

    // Initial call
    updateTime();

    // Refresh Interval
    setInterval(updateTime, 500);
})();


