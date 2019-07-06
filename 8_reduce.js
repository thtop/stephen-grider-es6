const numbers = [10, 20, 30];
let sum1 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
console.log('For loop: ', sum1);

// reduce V1
const sum2 = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log('sum2: ', sum2);

// reduce V2
const sum3 = numbers.reduce((sum, number) => sum + number, 0);
console.log('sum3: ', sum3);
