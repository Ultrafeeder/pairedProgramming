let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function oddOrEven(num) {
    let odd = [];
    let even = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            even.push(num[i])
        } else {
            odd.push(num[i])
        }
    }
    return odd && even
}



console.log(oddOrEven(array))


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function primeOrNot(num) {
    let prime = [];
    let not = [];
    if (num <= 1) {
        not.push(num);
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                not.push(num);
            }else {
            prime.push(num)
             }
        }
        
    }
}
    

array2.forEach(function (x) {
    const isPrime = primeOrNot(x);
    if (isPrime) {
        console.log(primeOrNot(array2))
    }
});



