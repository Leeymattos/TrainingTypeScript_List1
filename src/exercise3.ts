interface newProduct {
    id: number;
    type: string;
    brand: string;
    model: string;
}

class Product {
    private id: number;
    private type: string;
    private brand: string;
    private model: string;
    private isSold: boolean;

    constructor({ id, type, brand, model }: newProduct) {
        this.id = id;
        this.type = type;
        this.brand = brand;
        this.model = model;
    }

    public handleIsSold(option: boolean) {
        this.isSold = option;
    }
}

const product: Product = new Product({
    id: 123,
    type: 'Celular',
    brand: 'motorola',
    model: 'moto g5'
})

product.handleIsSold(true)

console.table(product);