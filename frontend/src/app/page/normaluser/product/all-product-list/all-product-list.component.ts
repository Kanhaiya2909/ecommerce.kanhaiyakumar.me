import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/product/cart.service';
import { ProductListService } from 'src/app/service/product/product-list.service';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.scss']
})
export class AllProductListComponent implements OnInit {

	products: any;
  searchMode: boolean;

	constructor(private productService: ProductListService,
    private cartService: CartService,
    private activeRoute: ActivatedRoute){}


	ngOnInit(): void {
		this.activeRoute.paramMap.subscribe(()=>{
      this.listOfProduct();
    })
	}
	listOfProduct() {
		this.searchMode = this.activeRoute.snapshot.paramMap.has('keyword');
    if(this.searchMode){
        this.handleSearchProducts();
    }else{
      this.handleListProducts();
    }
	}
  handleSearchProducts() {
    const theKeyword = this.activeRoute.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeyword).subscribe((data)=>{
      this.products = data;
    })
    
  }
  handleListProducts(){
    this.productService.getAllProduct().subscribe(
			data=>{
				console.log(data);
			this.products = data;
		}, (error)=>{
			console.log('This is a test error');
			console.log(error);
			
		})
  }
  addToCart(p: Product){
    const theCartItem = new CartItem(p);
    this.cartService.addToCart(theCartItem);
  }

}
