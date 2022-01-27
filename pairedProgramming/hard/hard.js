function matchingBrackets(string) {
    let data = string.split('')
    let first = data[0];
    let last = data[data.length - 1];
    if (first === "[" && last === "]") {
        return true;
    } else if (first === "{" && last === "}") {
        return true;
    } else if (first === "(" && last === ")") {
        return true;
    }
    else {
        return false;
    }
}

console.log(matchingBrackets("[aaaaaaaaaaaaaaaaaaaa]"))