import { Component, OnInit } from '@angular/core';
import { HdAuthService } from '../service/hd-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hdauth: HdAuthService) {
   }

  ngOnInit(): void {
    this.hdauth.logout();
  }

}
