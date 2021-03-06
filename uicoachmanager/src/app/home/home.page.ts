import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService, User } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public signFormVisible : boolean = false;
  public showValidationError : boolean = false;
  constructor(private homeService: HomeService) { }

  onSignUp(signUpForm: NgForm): void {
    console.log(signUpForm.value);
    let myUser : User ={
      name:  signUpForm.value.userName,
      password: signUpForm.value.password,
      validated: false
    }
    this.homeService.createUser(myUser);
  }

  segmentChanged(event : CustomEvent) : void{
    console.log(event.detail.value);
    if(event.detail.value === SEGMENT.SIGNUP){
      this.signFormVisible = true;
    }
    else if(event.detail.value === SEGMENT.LOGIN){
      this.signFormVisible = false;
    }
  }
  onLogin(loginForm : NgForm){
    let user : User ={
      name: loginForm.value.userName,
      password : loginForm.value.password,
      validated:false
    }
    
    if(!this.homeService.loginUser(user)){
      this.showValidationError = true;
    }
    else {this.showValidationError = false}
  }
}

enum SEGMENT {
  LOGIN = 'login',
  SIGNUP = 'sign-up'
}