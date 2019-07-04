const computers = [
    { name: 'Apple', ram: 24},
    { name: 'Compaq', ram: 4},
    { name: 'Acer', ram: 32}
];

let allComputersCanRunProgram = true;
let onlySomeComputerCanRunProgram = false;

for(let i = 0; i < computers.length; i++) {
    const computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputerCanRunProgram = true;
    }
}
console.log('For loop: ', allComputersCanRunProgram);
console.log('For loop: ', onlySomeComputerCanRunProgram);


// every V1
const everyV1 = computers.every(function(computer) {
    return computer.ram > 16;
})
console.log('every V1: ', everyV1);

// every V2
const everyV2 = computers.every(computer => computer.ram > 3)
console.log('every V2: ', everyV2);