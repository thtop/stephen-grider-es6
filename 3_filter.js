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