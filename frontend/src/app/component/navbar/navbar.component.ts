import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/product/cart.service';
import { LoginService } from 'src/app/service/user/loginService.service';
import { SignupService } from 'src/app/service/user/signupService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 

  isLoggedIn =false;
  user: User;
  signin:string = 'Sign in';
  constructor(public login: LoginService,
    private cartService: CartService,
     private signUpService: SignupService,
    private router: Router) { 
    window.addEventListener('scroll', function(){
      var mattoolbar:any = document.querySelector("mat-toolbar");
      mattoolbar.classList.toggle("sticky", window.scrollY > 0);
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    });
    this.updateCartStatus();
  }
  public logout(){
    this.login.logout();
    window.location.reload();
  }

  yourAccount(){
      this.signUpService.getUserByUsername(this.user.username).subscribe((data)=>{
      
        this.router.navigate([this.user.username]);
      }, (error)=>{
      })
    }

  navToLogin(){
    this.router.navigate(['login']);
  }  


// Search
doSearch(value: any){
  this.router.navigateByUrl(`/home/search/${value}`);
}

// Cart Component

tQuantity: number;
updateCartStatus() {
  this.cartService.totalQuantity.subscribe(
    data=>{
      this.tQuantity = data
    }
  );
  // this.tQuantity = this.cartService.cartItems.length;
}


}
