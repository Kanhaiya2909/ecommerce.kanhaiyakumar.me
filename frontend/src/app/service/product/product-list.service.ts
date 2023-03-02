import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductCategory } from 'src/app/model/product-category';
import productHelper from '../producthelper';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
 

  constructor(private http: HttpClient) { }

  getAllProduct():Observable<Product[]> {
    return this.http.get<GetResponseProduct>(`${productHelper}/products?size=100`).pipe(
      map(response => response._embedded.products)
    );
  }
  getAllCartegory():Observable<ProductCategory[]> {
    return this.http.get<GetResponseProductCategory>(`${productHelper}/product_category`).pipe(
      map(response => response._embedded.productCategory)
    );
  }
  getProductList(theCategoryId: number): Observable<Product[]>{
    const searchUrl = `${productHelper}/products/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.http.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  searchProducts(keyword: string) : Observable<Product[]>{
    const searchUrl = `${productHelper}/products/search/findByNameContaining?name=${keyword}`;

    return this.http.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.products)
      );
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${productHelper}/products/${theProductId}`;
    return this.http.get<Product>(productUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseProduct>{
    const searchUrl = `${productHelper}/products/search/findByCategoryId?id=${theCategoryId}` + `&page=${thePage}&size=${thePageSize}`;

    return this.http.get<GetResponseProduct>(searchUrl);
  }

}


interface GetResponseProduct{
  _embedded:{
    products: Product[];
  },
  page:{
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory: ProductCategory[];
  }
}