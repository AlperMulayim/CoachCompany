import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService, User } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private homeService: HomeService) { }

  onSignUp(signUpForm: NgForm): void {
    console.log(signUpForm.value);

  


    let myUser : User ={
      name:  signUpForm.value.userName,
      password: signUpForm.value.password,
      validated: false
    }
    this.homeService.createUser( 
      myUser
     );
  }
}
