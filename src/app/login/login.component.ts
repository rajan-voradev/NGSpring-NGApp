import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HdAuthService } from '../service/hd-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
export class LoginComponent implements OnInit {

  adminusername = 'awesome'
  adminpassword = ''
  errorMsg = 'Invalid Login'
  invalidLogin = false

  constructor(private router: Router,
              public hdauth: HdAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log(this.adminusername);
    if (this.hdauth.authenticate(this.adminusername, this.adminpassword)) {
      this.router.navigate(['intro', this.adminusername]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }


}
