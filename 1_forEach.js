console.log('=== Section 2: The forEach Helper ===');

const colors = [ 'red', 'bule', 'green'];

// for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// forEach V1
colors.forEach(function(color) {
    console.log(color);
});

// forEach V2
colors.forEach(color => {
    console.log(color);
});

console.log('=== Array V1 ===');
// Create an array of numbers
var numbers = [ 1, 2, 3, 4, 5];
// Create a veriable to hold the sum
var sum = 0;
// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
    sum += number;
});
// Print the sum variable
console.log(sum);


console.log('=== Array V2 ===');
// Create an array of numbers
var numbers = [ 1, 2, 3, 4, 5];
// Create a veriable to hold the sum
var sum = 0;

function adder(number) {
    sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);
// Print the sum variable
console.log(sum);


console.log('=== Coding Exercise 1 ===');
/*
function handlePosts() {
    const posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(post => {
      savePost(post);
    })
}
*/

console.log('=== Coding Exercise 2 ===');
/*
const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

const areas = [];

images.forEach(image => {
    areas.push(image.height * image.width);
})
*/