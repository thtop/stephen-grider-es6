console.log('=== Section 4: The filter Helper ===');

const products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

var filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log('For loop: ', filteredProducts);

// filter v1
const filterV1 = products.filter(function(product) {
    return product.type === 'vegetable';
});
console.log('Filter V1: ', filterV1);

// filter v2
const filterV2 = products.filter(product => {
    return product.type === 'vegetable';
});
console.log('Filter V2: ', filterV2);

// filter v3
const filterV3 = products.filter(product => product.type === 'vegetable');
console.log('Filter V3: ', filterV3);


// filter 2
const products2 = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// Type is 'vegetable', quantity is greater than 0, price is less than 10

// filter 2 V1
const product2V1 = products2.filter(function(product) {
    return product.type === 'vegetable'
            && product.quantity > 0
            && product.price < 10
});
console.log('product2 V1:', product2V1);

// filter 2 V2
const product2V2 = products2.filter((product) => {
    return product.type === 'vegetable'
            && product.quantity > 0
            && product.price < 10
});
console.log('product2 V2:', product2V2);

// filter 2 V3
const product2V3 = products2.filter(product => product.type === 'vegetable' && product.quantity > 0 && product.price < 10
);
console.log('product2 V3:', product2V3);