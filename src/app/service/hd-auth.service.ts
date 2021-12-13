import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdAuthService {

  constructor() { }

  authenticate(user: string, password: string) {
    console.log('--' + this.isUserAuth())
    if (user === "awesome" && password === "super") {
      sessionStorage.setItem('authUser', user);
      return true;
    } else {
      return false;
    }
  }

  isUserAuth() {
    let user = sessionStorage.getItem('authUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
