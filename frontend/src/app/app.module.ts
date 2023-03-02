import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './page/register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './service/Auth/auth.interceptor';
import { AdminComponent } from './page/admin/admin.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { SplitPipe } from './pipes/mycustom.pipe';
import { UserdashboardComponent } from './page/normaluser/userdashboard/userdashboard.component';
import { NormalAccountComponent } from './page/normaluser/normal-account/normal-account.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { TablistsComponent } from './page/normaluser/tablists/tablists.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './page/normaluser/product/product-list/product-list.component';
import { AllProductListComponent } from './page/normaluser/product/all-product-list/all-product-list.component';
import { CategoryProductComponent } from './page/normaluser/product/category-product/category-product.component';
import { ProductDetailsComponent } from './page/normaluser/product/product-details/product-details.component';
import { CartDetailsComponent } from './page/normaluser/product/cart-details/cart-details.component';
import { CheckoutComponent } from './page/normaluser/product/checkout/checkout.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    SplitPipe,
    UserdashboardComponent,
    NormalAccountComponent,
    TablistsComponent,
    ProductListComponent,
    AllProductListComponent,
    CategoryProductComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    NgbModule,
    ReactiveFormsModule,
    MatStepperModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
