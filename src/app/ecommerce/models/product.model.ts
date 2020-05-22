export class Product {
    id: number;
    type: string;
    name: string;
    price: number;
    pictureUrl: string;

    constructor(id: number, type: string, name: string, price: number, pictureUrl: string) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
    }
}