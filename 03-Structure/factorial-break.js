let total = 1;
let i = 10;
while (--i) {
    total *= i;  
    if (i === 1) break;
}
console.log(total)