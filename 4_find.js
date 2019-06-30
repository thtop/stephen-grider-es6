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


function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

// V1
const carsV1 = cars.find(function(car) {
    return car.model === 'Focus';
});
console.log('carsV1: ', carsV1);

// V2
const carsV2 = cars.find(car => car.model === 'Focus');
console.log('carsV2: ', carsV2);

/**
 * Posts => comment
 */
const posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

const comment = { postId: 1, content: 'Great Post' };

// V1
function postForComment1(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}
console.log('PostV1: ', postForComment1(posts, comment));

// V2
const postForComment2 = (posts, comment) => posts.find(post => post.id === comment.postId);
console.log('PostV2: ', postForComment2(posts, comment));

/**
 * Exercise 1: Finding Admin Users
 */
const usersEx = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
const admin = usersEx.find(user => user.admin);
console.log('admin: ', admin);

/**
 * Exercise 2: What's Your Balance?
 */
const accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
const account = accounts.find(acc => acc.balance === 12);
console.log('account: ', account);

/**
 * Exercise 3: Customer findWhere Helper
 */
const paints = [
    {height: '10'},
    {height: '15'},
    {height: '20'}
];

const paint =  {height: '10'};

const findWhere = (array, criteria) => {
    return array.find(arr => arr.height === criteria ['height']);
}
console.log('findWhere: ', findWhere(paints, paint));
