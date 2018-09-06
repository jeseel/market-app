import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class ShippingService {

    constructor(private db: AngularFireDatabase) { }

    create(shipping) {
        return this.db.list('/shipping').push(shipping)
    }

    get(shippingId) {
        return this.db.object('/shipping/' + shippingId);
    }

    update(shippingId, shipping) {
        return this.db.object('/shipping/' + shippingId).update(shipping);
    }

    delete(shippingId) {
        return this.db.object('/shipping/' + shippingId).remove();
    }
}