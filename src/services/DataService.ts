import { Product } from "../models/Product.js";

export class DataService{
    async getProducts(): Promise<Product[]> {
        const res = await fetch("data/product.json")
        const data = await res.json()
        return data.map((p: any)=> new Product(p.id, p.name, p.price, p.stock))
    }
}