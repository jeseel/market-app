import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.shoppingCartService.getCart();

  }

  logOut() {
    this.auth.logout();
  }

  ngOnDestroy() {
    console.log('OnDestroy!!!!');
  }

  logIn() {
    this.auth.login();
  };

}
