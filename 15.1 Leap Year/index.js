// var leapYear = 2020
// console.log(leapYear)
// leapYear1 = leapYear / 4
// console.log(leapYear1)
// leapYear2 = leapYear / 100
// console.log(leapYear2)
// leapYear3 = leapYear / 400
// console.log(leapYear3)

// // V1:
function checkLeapYear(year) {
    let leap = "";

    if (Number.isInteger(year / 4)) {
        // console.log("a")
        // console.log(year / 4)
        if (Number.isInteger(year / 100)) {
            // console.log("d")
            if (Number.isInteger(year / 400)) {
                // console.log("e")
                leap = false;
                return leap;
            } else {
                // console.log("f")
                leap = true;
                return leap;
            }
        } else {
            // console.log("c")
            leap = true;
            return leap;
        }
    } else {
        leap = false;
        // console.log("b")
        return leap;
    }
}

leapYear = checkLeapYear(1996)
if (leapYear) {
    console.log("Leap year.")
} else {
    console.log("Not leap year.")
}

// // V2:
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

leapYear2 = isLeap(1996)
console.log(leapYear2)

// V3:

function isLeapYear(year) {
    if (year % 4 !== 0) {
        // console.log("a. " + year % 4)
        return false;
    }

    if (year % 100 !== 0) {
        // console.log("b. " + year % 100)
        return true;
    }

    if (year % 400 === 0) {
        // console.log("c. " + year % 100)
        return true;
    }

    // console.log("c. " + year % 100)
    return false;
}

leapYear3 = isLeapYear(1996)
if (leapYear3) {
    console.log("Leap year.")
} else {
    console.log("Not leap year.")
}