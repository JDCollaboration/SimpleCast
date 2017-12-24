import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  val: string;
  userAuthenticated: boolean;
  sidenavMode = 'over';

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  private maxSmallScreenWidth = 768;

  constructor() {
    this.userAuthenticated = false;
  }

  ngOnInit() {
    if (window.innerWidth >= this.maxSmallScreenWidth) {
      this.sidenavMode = 'side';
      this.sidenav.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < this.maxSmallScreenWidth) {
      this.sidenavMode = 'over';
      this.sidenav.close();
    } else {
      this.sidenavMode = 'side';
      this.sidenav.open();
    }
  }

  close() {
    this.sidenav.close();
  }

  onLoginClicked() {
    this.userAuthenticated = true;
  }

  onLogoutClicked() {
    this.userAuthenticated = false;
  }
}
