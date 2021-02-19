import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  checAuth() {
    const token = localStorage.getItem('authToken');
    if(token) {
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }
}
