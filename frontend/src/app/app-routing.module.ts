import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductListComponent } from './page/normaluser/product/all-product-list/all-product-list.component';
import { ProductListComponent } from './page/normaluser/product/product-list/product-list.component';
import { AdminComponent } from './page/admin/admin.component';
import { LoginComponent } from './page/login/login.component';
import { NormalAccountComponent } from './page/normaluser/normal-account/normal-account.component';
import { UserdashboardComponent } from './page/normaluser/userdashboard/userdashboard.component';
import { RegisterComponent } from './page/register/register.component';
import { AdminguardGuard } from './service/admin/adminguard.guard';
import { NormalguardGuard } from './service/normal/normalguard.guard';
import { CategoryProductComponent } from './page/normaluser/product/category-product/category-product.component';
import { ProductDetailsComponent } from './page/normaluser/product/product-details/product-details.component';
import { CartDetailsComponent } from './page/normaluser/product/cart-details/cart-details.component';
import { CheckoutComponent } from './page/normaluser/product/checkout/checkout.component';

const routes: Routes = [

  {
    path:'sign-up',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'cart',
    component: CartDetailsComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent,
    canActivate:[NormalguardGuard]
  },
  {
    path:'home',
    component: UserdashboardComponent,
    children:[
      {
        path:'products/:id',
        component: ProductDetailsComponent
      },
      {
        path:'search/:keyword',
        component: AllProductListComponent
      },
      {
        path:'',
        component: ProductListComponent
      },
      {
        path:'all-products',
        component: AllProductListComponent
      },
      {
        path:'category/:id',
        component: CategoryProductComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:':username',
    component: NormalAccountComponent,
    canActivate:[NormalguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
