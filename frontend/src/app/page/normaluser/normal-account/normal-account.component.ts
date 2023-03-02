import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/user/loginService.service';
import { SignupService } from 'src/app/service/user/signupService.service';

@Component({
  selector: 'app-normal-account',
  templateUrl: './normal-account.component.html',
  styleUrls: ['./normal-account.component.scss']
})
export class NormalAccountComponent implements OnInit {
  user: User;
  isEdit: boolean = false;

  constructor(private login: LoginService, private userService : SignupService) { 
   
  }

  ngOnInit(): void {
    this.user = this.login.getUser();
  }

  

}