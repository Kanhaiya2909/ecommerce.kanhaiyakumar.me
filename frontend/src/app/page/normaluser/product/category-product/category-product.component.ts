import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/product/cart.service';
import { ProductListService } from 'src/app/service/product/product-list.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit{

  currentCategoryId: number;
  product: any;
  searchMode: boolean = false;
  constructor(private productService: ProductListService,
    private cartService: CartService,
    private activeRoute: ActivatedRoute){


  }
  ngOnInit(){
   this.activeRoute.paramMap.subscribe(()=>{
    this.getProductListByCategory();
   })
  }
  // listOfProduct() {
	// 	this.searchMode = this.activeRoute.snapshot.paramMap.has('keyword');
  //   if(this.searchMode){
  //       this.handleSearchProducts();
  //   }else{
  //     this.getProductListByCategory();
  //   }
	// }
  // handleSearchProducts() {
  //   const keyword:string = this.activeRoute.snapshot.paramMap.get('keyword')!;
  //   this.productService.searchProducts(keyword).subscribe(
  //     (data)=>{
  //     this.product = data;
  //   },(error)=>{
  //     console.log('error on search method handleSearchProduct');
      
  //   })
    
  // }
  getProductListByCategory() {
    const hasCategoryId: boolean = this.activeRoute.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId = +this.activeRoute.snapshot.paramMap.get('id')!;
    }else{
      console.log('Error occured on category');
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      (data)=>{
        this.product = data;
        console.log(data);
      }
    )
  }

  addToCart(p: Product){
    const theCartItem = new CartItem(p);
    this.cartService.addToCart(theCartItem);
  }

  

}

