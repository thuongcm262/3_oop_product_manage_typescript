import { CartItem } from "./Cart.js";

//
export class Order {
    constructor(public id: number, public items: CartItem[], public total: number, public createdAt: Date) {}
}