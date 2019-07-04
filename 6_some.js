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


// some V1
const someV1 = computers.some(function(computer) {
    return computer.ram > 16;
})
console.log('some V1: ', someV1);

// some V2
const someV2 = computers.some(computer => computer.ram > 3)
console.log('some V2: ', someV2);