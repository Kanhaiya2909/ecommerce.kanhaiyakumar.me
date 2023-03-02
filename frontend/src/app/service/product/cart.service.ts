import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from 'src/app/model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage;

  constructor() {
    let data = JSON.parse(this.storage.getItem('cartItems')!);
  
    if(data != null){
      this.cartItems = data;

      this.computeCartTotals();
    }
  
  }

addToCart(theCartItem: CartItem){
  let alreadyExitInCart: boolean = false;
  let exitingCartItem: CartItem = undefined!;

  if(this.cartItems.length>0){
    
    exitingCartItem = this.cartItems.find(tempCartItem =>tempCartItem.id === theCartItem.id)!;


    alreadyExitInCart = (exitingCartItem != undefined);
  }

  if(alreadyExitInCart){
    exitingCartItem.quantity++;
  }else{
    this.cartItems.push(theCartItem);
  }
  this.computeCartTotals();
  


}
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity*currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);

    this.persistCartItems();
  }


  persistCartItems(){
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }


  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    
    for(let tempcartItem of this.cartItems){
      const subTotalPrice = tempcartItem.quantity * tempcartItem.unitPrice;

    }
  }

  decrementQuantity(theCartItems: CartItem) {
    theCartItems.quantity--;
    if(theCartItems.quantity == 0){
      this.remove(theCartItems);
    }else{
      this.computeCartTotals();
    }
  }
  remove(theCartItems: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCart => tempCart.id === theCartItems.id);
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

}
