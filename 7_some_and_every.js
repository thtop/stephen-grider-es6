const names = [
    "Alexandria",
    "Mathew",
    "Joe"
];

const every = names.every(name => name.length > 4 );
console.log('every: ', every);

const some = names.some(name => name.length > 4);
console.log('some: ', some);


/**
 * Every and Some in Practice
 */
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

const username = new Field("2cool");
const password = new Field("my_password");
const birthdae = new Field("10/10/2010");

// if (username.validate() && password.validate()) {
//     return true;
// }

const fields = [ username, password, birthdae];

// every V1
const formIsValidV1 = fields.every(function(field) {
    return field.validate();
});
console.log("FormIsValidV1: ", formIsValidV1);


// every V2
const formIsValidV2 = fields.every(field => field.validate());
console.log("FormIsValidV2 : ", formIsValidV2);


if (formIsValidV1) {
    // allow user to sumit!
} else {
    // show an error message!
}


/**
 * Exercise 1: Finding Submitted Users
 */
const users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
const hasSubmitted = users.every(user => user.hasSubmitted);
console.log('Exercise 1: ', hasSubmitted);

/**
 * Exercise 2: In Progress Network Requests
 */
const requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
const inProgress = requests.every(request => request.status);
console.log('Exercise 2: ', inProgress);