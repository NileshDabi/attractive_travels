import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  userData = new BehaviorSubject(this.getSessionStorage('userInfo'));
  userDataSubscription = this.userData.asObservable();

  constructor(private router: Router) { }

  saveToSession = (key, value) => {
    if(key === 'userInfo') {
      this.userData.next(value.user);
      sessionStorage[key] = JSON.stringify(value.user);
    } else sessionStorage[key] = JSON.stringify(value);
  };

  saveToLocalStorage = function(key, value) {
    localStorage[key] = JSON.stringify(value);
  };

  getSessionStorage(key): any {
    if (sessionStorage[key]) {
      return JSON.parse(sessionStorage[key]);
    } else {
      return false;
    }
  }

  getFromLocalStorage(key): any {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key] || 'null');
    } else {
      return false;
    }
  }

  removeFromLocalStorage(key): any {
    localStorage.removeItem(key);
  }

  removeFromSessionStorage(key): any {
    sessionStorage.removeItem(key);
  }

  resetStorage() {
    localStorage.clear();
    sessionStorage.clear();
    this.userData.next(null);
  }

  logout() {
    this.resetStorage();
    this.router.navigate(['/']);
  }
}
