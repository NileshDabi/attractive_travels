import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private storageService: StorageService) { }

  checAuth() {
    const token = this.storageService.getSessionStorage('authToken');
    const user = this.storageService.getSessionStorage('userInfo');
    if(token && (user.role === 'employee' || user.role === 'owner')) {
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }

  checAdmin() {
    const token = this.storageService.getSessionStorage('authToken');
    const user = this.storageService.getSessionStorage('userInfo');
    if(token && user.role === 'owner') {
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }
}
