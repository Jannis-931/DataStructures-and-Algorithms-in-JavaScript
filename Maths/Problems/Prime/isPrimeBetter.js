const isPrimeBetter = (num) => {
    if (num <= 1) {
        return false;
    }
    const n = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const n = 20;
for (let i = 1; i <= n; i++) {
    const result = isPrimeBetter(i)
    console.log(`${i} is prime: `, result);
}


// without Math.....
// const isPrimeBetter = (num) => {
//     for (let i = 2; i*i <= num; i++) {
//         if (num % i === 0) {
//             return 'not prime';
//         }
//     }
//     return 'prime'
// }

// console.log(isPrimeBetter(37));