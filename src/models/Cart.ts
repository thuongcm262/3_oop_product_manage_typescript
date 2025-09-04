import { Product } from "./Product.js";

//
export class CartItem {
  constructor(public product: Product, public quantity: number) {}
}

export class Cart {
    items: CartItem[] = [];

    addProduct(product: Product, quantity: number=1){
        const existingItem = this.items.find(i=> i.product.id === product.id)
        if(existingItem){
            existingItem.quantity += quantity
        } else {
            this.items.push(new CartItem(product, quantity))
        }
    }

    removeProduct(productId: number){
        this.items = this.items.filter(i=> i.product.id !== productId)
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }
}