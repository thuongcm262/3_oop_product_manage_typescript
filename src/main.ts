import { Cart } from "./models/Cart.js";
import { DataService } from "./services/DataService.js";

//
console.log("Product Management System");

const dataService = new DataService();
const cart = new Cart()

async function init() {
    const products = await dataService.getProducts();
    console.log("Products:", products);
    const productList = document.getElementById("product-list");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    function renderCart(){
        cartList!.innerHTML = "";
        cart.items.forEach(item => {
            const div = document.createElement("div");
            div.className = "border p-2 mb-2 bg-white";
            div.innerHTML = `
                <span>${item.product.name}</span>
                <span>${item.quantity}</span>
                <span>${item.product.price}</span>
            `
            cartList!.appendChild(div);
        })
        cartTotal!.textContent = cart.getTotal().toString();
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "border p-4 mb-4 bg-white";
        card.innerHTML = `
            <div>
                <span>${product.name}</span>
                <span>${product.price}</span>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `
        card.querySelector("button")!.addEventListener("click", () => {
            cart.addProduct(product, 1);
            renderCart();
        })
        productList!.appendChild(card);
    })

}

init();
