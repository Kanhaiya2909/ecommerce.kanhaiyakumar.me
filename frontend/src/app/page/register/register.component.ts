import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SignupService } from 'src/app/service/user/signupService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  firstFormGroup = this._formBuilder.group({
    usernameCtrl: ['', Validators.minLength(3)],
    passwordCtrl:  ['', Validators.minLength(3)],
    emailCtrl: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    nameCtrl:  ['', Validators.minLength(3)],
  });

  

  
  @Input() user:User = {
    id: 0,
    username: '',
    password: '',
    name: '',
    email: ''
  }

  constructor(private signupService: SignupService, private router: Router, private _formBuilder: FormBuilder){

  }

 

  registerUser(){
    this.signupService.addUser(this.user).subscribe((data)=>{
      this.router.navigate(['']);
    })
  }

  show:boolean = false;
  changeShow(){
    this.show  = !this.show;
  }
}
