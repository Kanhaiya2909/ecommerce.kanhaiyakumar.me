import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/LoginData';
import { LoginService } from 'src/app/service/user/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginData: LoginData ={
    username: '',
    password: ''
  }

  firstFormGroup = this._formBuilder.group({
    usernameCtrl: ['', Validators.minLength(3)],
    passwordCtrl:  ['', Validators.minLength(3)],
  });

  constructor(private loginService: LoginService, private route: Router, private _formBuilder: FormBuilder){

  }
  ngOnInit(): void {
  }

  loginUser(){

    this.loginService.generateToken(this.loginData).subscribe((data:any)=>{
      console.log('success');
        console.log(data);

        
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);
          if(this.loginService.getUserRole()=='ADMIN'){
            // window.location.href='/admin';
            this.route.navigate(['admin']);
            this.loginService.loginStatusSubject.next(true);

          }else if(this.loginService.getUserRole()=='NORMAL'){
            // window.location.href='/user-dashboard';
            this.route.navigate(['home']);
            this.loginService.loginStatusSubject.next(true);
          }else{
            this.loginService.logout();
          }
        })
        
  })
  }
  
  show:boolean = false;
  changeShow(){
    this.show  = !this.show;
  }
}
