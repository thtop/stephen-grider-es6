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

// item 21. Touch More of Reduce
const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

// [ 'red', 'yellow', 'blue']
// reduce V3
const color1 = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);
console.log('color1: ', color1);

// reduce V4
const color2 = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);
    return previous;
}, []);
console.log('color2: ', color2);

/**
 * Item 22. Ace Your Next Interview with Reduce
 */

// "()()()()"
// "(((())))"
// "))))"
// "()))))"
// ")("
// ")()("
function balancedParens(string) {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) { return previous };
        if (char === "(") { return ++previous }
        if (char === ")") { return --previous }
        return previous;
    }, 0);
}
console.log('Balanced: ', balancedParens(")("));

/**
 * Exercise 1: Distance Traveld
 */
const trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

const totalDistance = trips.reduce((sum, trip) => sum += trip.distance, 0)
console.log('Exercise 1: ', totalDistance);

/**
 * Exercise 2: Reducing Properties
 */
const desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
const deskTypes = desks.reduce((acc, desk) => {
    desk.type === 'sitting' ? ++acc.sitting : ++acc.standing;
    return acc
}, { sitting: 0, standing: 0 });
console.log('Exercise 2: ', deskTypes);