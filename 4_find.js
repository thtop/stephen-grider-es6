console.log('=== Section 5: The find Helper ===');

const users = [
    { name: 'Jill' },
    { name: 'Alex', id: 4 },
    { name: 'Bill'},
    { name: 'Alex'}
];

let user;

for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log('For loop: ', user);


// find V1
const findV1 = users.find(function(user) {
    return user.name === 'Alex';
});
console.log('findV1: ', findV1);

// find V2
const findV2 = users.find(user => user.name === 'Alex');
console.log('findV2: ', findV2);