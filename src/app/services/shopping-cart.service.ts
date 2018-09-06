import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Product } from "app/models/product";
import 'rxjs/add/operator/take';
import { ShoppingCart } from "app/models/shopping-cart";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {

    constructor(private db: AngularFireDatabase) { }

    async getCart(): Promise<Observable<ShoppingCart>> {
        let cartId = await this.getOrCreateCartId();

        return this.db.object('/shopping-carts/' + cartId)
            .map(s => new ShoppingCart(s.items));
    }

    async addToCart(product: Product) {
        this.updateItem(product, 1);
    }

    removeFromCart(product: Product) {
        this.updateItem(product, -1);
    }

    async clearCart() {
        let cartId = await this.getOrCreateCartId();
        this.db.object('/shopping-carts/' + cartId + '/items').remove()
    }

    private create() {
        return this.db.list('shopping-carts').push({
            dateCreated: new Date().getTime()
        })
    }

    private getItem(cartId: string, productId: string) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    private async getOrCreateCartId(): Promise<string> {
        let cartId = localStorage.getItem('cartId');

        if (cartId) return cartId;

        let result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key
    }


    private async updateItem(product: Product, change: number) {
        let cartId = await this.getOrCreateCartId();
        let item$ = this.getItem(cartId, product.$key)

        item$.take(1).subscribe(item => {
            let quantity = (item.quantity || 0) + change
            if (quantity === 0) item$.remove();
            else
                item$.update({
                    title: product.title,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity: quantity
                })
        });
    }

    // set(product) {
    //     // getAll shoppingCart when those existem
    //     let shoppingCart = this.getAll() ? this.getAll() : [];

    //     product.key = product.$key;
    //     shoppingCart.push(product);

    //     // Compare if product does not match in shoppingCart
    //     // Add new product in Local Storage
    //     if (!this.get(product))
    //         localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    // }

    // get(product) {
    //     let shoppingCart = this.getAll();

    //     if (!shoppingCart)
    //         return null;

    //     return shoppingCart.find(prod => product.key === prod.key);
    // }

    // delete(product) {
    //     var shoppingCart = this.getAll();
    //     if (shoppingCart) {
    //         // remove item from collection
    //         shoppingCart.slice(1, shoppingCart.indexOf(product))
    //         localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    //     }
    // }

    // getAll(): any[] {
    //     return JSON.parse(localStorage.getItem('shoppingCart'));
    // }

}