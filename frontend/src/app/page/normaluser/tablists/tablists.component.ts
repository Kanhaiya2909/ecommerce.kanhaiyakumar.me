import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/service/product/product-list.service';

@Component({
  selector: 'app-tablists',
  templateUrl: './tablists.component.html',
  styleUrls: ['./tablists.component.scss']
})
export class TablistsComponent implements OnInit {

	productCategory: any;
  currentcategoryId:number;
	constructor(private productService: ProductListService){}


	ngOnInit() {
      this.listOfProduct();
	}
	listOfProduct() {
		this.productService.getAllCartegory().subscribe(
			(data:any)=>{
			this.productCategory = data;
      this.currentcategoryId = this.productCategory.id;
		}, (error)=>{
			console.log('This is a test error');
			console.log(error);
		})
	}

 
}
