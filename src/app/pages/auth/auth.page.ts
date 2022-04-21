import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  hiddenSignup:Boolean = true
  hiddenSignin:Boolean

  constructor() { }

  hiddeForm() {
    if (this.hiddenSignup) {
      this.hiddenSignup = false
      this.hiddenSignin = true
    } else {
      this.hiddenSignin = false
      this.hiddenSignup = true
    }
  }

  ngOnInit() {
  }

}
