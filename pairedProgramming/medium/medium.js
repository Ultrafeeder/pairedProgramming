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