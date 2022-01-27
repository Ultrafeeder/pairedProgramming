//MEDIUM 1

function vowelChecker(x) {
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        console.log("Is vowel.")
    } else {
        console.log("nah.")
    }
}
vowelChecker("a");

//MEDIUM 2

function anagramCheck(x, y) {
    let lenX = x.length;
    let lenY = y.length;
    if (lenX !== lenY) {
        return false;
    }
    let strX = x.split('').sort().join('');
    let strY = y.split('').sort().join('');
    if (strX === strY) {
        return true;
    } else {
        return false;
    }
}

console.log(anagramCheck("dog", "god"))

// MEDIUM 3

function gcd(a, b) {
    if (!b) {
        return a
    }
    return gcd(b, a % b)
}

console.log(gcd(3, 12));

// MEDIUM 4

var car = {
    make: "Sub-ster",
    model: "Legacy",
    year: "old",
    mileage: 250000,
    color: "rusty",
    driveToWork: (mile) => {
        let newMile = car.mileage + mile;
        console.log(`Getting closer...every day: ${newMile} miles.`)
    },
    runErrands: (mile) => {
        let newMile = car.mileage + mile;
        console.log(`Hopefully it'll make it: ${newMile} miles.`)
    },
    driveToWork: (mile) => {
        let newMile = car.mileage + mile;
        console.log(`The sea is only a floored pedal away! : ${newMile} miles.`)
    }
}

// car.driveToWork(4);
// car.runErrands(30);
car.driveToWork(100000000000000);