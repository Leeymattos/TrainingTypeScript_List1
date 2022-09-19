"use strict";
class Product {
    constructor({ id, type, brand, model }) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.model = model;
    }
    handleIsSold(option) {
        this.isSold = option;
    }
}
const product = new Product({
    id: 123,
    type: 'Celular',
    brand: 'motorola',
    model: 'moto g5'
});
product.handleIsSold(true);
console.table(product);
