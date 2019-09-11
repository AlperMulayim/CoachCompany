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

    this.homeService.getUsers().subscribe((userList: User[]) => {
      console.log(userList);
      userList.forEach(user => {
          console.log(user.validated);
          console.log(user.name);
      });
    });
  }
}
