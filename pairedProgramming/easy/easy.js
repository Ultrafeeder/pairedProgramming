let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function oddOrEven(num) {
    let odd = [];
    let even = [];
    for (let a = 0; a < num.length; a++) {
        if (num[a] % 2 === 0) {
            even.push(num[a])
        } else {
            odd.push(num[a])
        }
    }
    console.log(odd);
    console.log(even);
}



oddOrEven(array);




let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function primeOrNot(num) {
//     let prime = [];
//     if (num <= 1) {
//         return false;
//     } else if (num % i == 0) {
//         return false;
//             }else {
//         return true;
//     }
// }

function checkPrime(x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i < x; i++){
        if (x % i === 0) {
            return false;
        } 
    }
    return x !== 1;
}

let primes = array2.filter(checkPrime)

console.log(primes)
    


    




