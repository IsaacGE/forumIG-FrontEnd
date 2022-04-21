import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) {}

  isLogged() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

}
