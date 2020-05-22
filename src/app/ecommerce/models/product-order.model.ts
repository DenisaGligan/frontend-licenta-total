import {Product} from "./product.model";

export class ProductOrder {
    product: Product;
    quantity: number;
  

    constructor(product: Product, quantity: number, adress: string, telephone: string) {
        this.product = product;
        this.quantity = quantity;
    }
}