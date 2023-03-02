import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CartService } from 'src/app/service/product/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CheckoutComponent implements OnInit {

  totalCost:any;

  
  totalQuantity:any;

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
    emailCtrl:['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
  });
  secondFormGroup = this._formBuilder.group({
    addCtrl: ['', Validators.required],
    stateCtrl: ['', Validators.required],
    pinCtrl: ['', Validators.pattern("[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]")],
  });

  constructor(private _formBuilder: FormBuilder, private cartService: CartService) {}



  ngOnInit(): void {
    this.cartService.totalPrice.subscribe((data)=>{
      this.totalCost = data;
    })
    this.cartService.totalQuantity.subscribe((data)=>{
      this.totalQuantity = data;
    })
  }

}