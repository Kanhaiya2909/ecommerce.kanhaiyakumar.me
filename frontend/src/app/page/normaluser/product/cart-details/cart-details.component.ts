import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/product/cart.service';
import { LoginService } from 'src/app/service/user/loginService.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService, private route: Router,  private login: LoginService,) { }

  isLoggedIn =false;

  ngOnInit(): void {
    this.listCartDetails();
    this.isLoggedIn = this.login.isLoggedIn();
  }
  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data=>{
          this.totalPrice = data;
      }
    )

    this.cartService.totalQuantity.subscribe(
      data=>{
          this.totalQuantity = data;
      }
    )

    this.cartService.computeCartTotals();
  }

  incrementQuantity(thecartItems: CartItem){
    this.cartService.addToCart(thecartItems);
  }

  decrementQuantity(theCartItems: CartItem){
    this.cartService.decrementQuantity(theCartItems);
  }

  remove(cartItem: CartItem){
    this.cartService.remove(cartItem);
  }

  navToLogin(){
    this.route.navigate(['login']);
  }  

  goToCheckout(){
    this.route.navigate(['checkout']);
  }


}
