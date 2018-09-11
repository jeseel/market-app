import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AppError } from 'app/common/app-error';


@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products')
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId)
      .remove()
      .catch((error: any) => {
        return Observable.throw(new AppError(error))
  });
}

}
