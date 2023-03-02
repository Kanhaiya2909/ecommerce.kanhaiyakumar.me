import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentInfo } from 'src/app/model/payment-info';
import { Purchase } from 'src/app/model/purchase';
import productHelper from '../producthelper';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = `${productHelper}/checkout/purchase`;
  private paymentIntentUrl = `${productHelper}/checkout/payment-intent`;

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase : Purchase): Observable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any>{
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }
}