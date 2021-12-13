import { Component, OnInit } from '@angular/core';
import { HdAuthService } from '../service/hd-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLogged: boolean = false;
  constructor(public hdauth: HdAuthService) { }

  ngOnInit(): void {
    //this.isUserLogged = this.hdauth.isUserAuth();
  }

}
