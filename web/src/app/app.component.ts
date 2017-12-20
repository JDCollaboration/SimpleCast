import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userAuthenticated: boolean;
  val: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() {
    this.userAuthenticated = false;
  }

  onLoginClicked() {
    this.userAuthenticated = true;
  }

  onLogoutClicked() {
    this.userAuthenticated = false;
  }
}
