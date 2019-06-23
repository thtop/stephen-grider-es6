console.log('=== Section 3: The Map Helper ===');

const numbers = [ 1, 2, 3];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    // numbers[i] = numbers[i] * 2;
    doubleNumbers.push(numbers[i] * 2);
}
console.log(`doubleNumbers ${doubleNumbers}`);

// map V1
const doubled1 = numbers.map(function(number) {
    return number * 2;
});
console.log(`doubled1 ${doubled1}`);

// map V2
const doubled2 = numbers.map(number => {
    return number * 2;
});
console.log(`doubled2: ${doubled2}`);

// map V3
const doubled3 = numbers.map(number => number * 2);
console.log(`doubled3: ${doubled3}`);

/**
 * Level 2
 */
const cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensice' }
];

// map v1
const prices1 = cars.map(function(car) {
    return car.price;
});
console.log(`prices1: ${prices1}`);

// map v2
const prices2 = cars.map(car => {
    return car.price;
});
console.log(`prices2: ${prices2}`);

// map v3
const prices3 = cars.map(car => car.price );
console.log(`prices3: ${prices3}`);

/**
 * Exercise 3: Plucking Values
 */
const images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];
  
const heights = images.map(image => image.height);
console.log(`heights: ${heights}`);

/**
 * Exercise 4: Calculating Values with Map
 */
const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
  
const speeds = trips.map(trip => trip.distance / trip.time);
console.log(`speeds: ${speeds}`);

/**
 * Exercise 5: Really Hard - Implementing 'Pluck'
 */
const paints = [
    { color: 'red'},
    { color: 'blue'},
    { color: 'yellow'}
];

// map v1
function pluck1(paints, property) {
    return paints.map(paints => paints[property])
};
console.log(`pluck1: ${pluck1(paints, 'color')}`);

// map v2
const pluck2 = (paints, property) => {
    return paints.map(paints => paints[property])
};
console.log(`plucks: ${pluck2(paints, 'color')}`);

// map v3
const pluck3 = (paints, property) => paints.map(paints => paints[property]);
console.log(`plucks: ${pluck3(paints, 'color')}`);