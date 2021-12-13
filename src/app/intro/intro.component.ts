import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyUserObj, HidataService } from '../service/data/hidata.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
  
export class IntroComponent implements OnInit {

  message: string = 'This is the intro to dummy';
  springdummytest = '';
  springdummyerror = '';
  username = '';
  constructor(private route: ActivatedRoute,
              private hidummy: HidataService) { }

  ngOnInit(): void {
    console.log(this.message);
    console.log(this.route.snapshot.params['user']);
    this.username = this.route.snapshot.params['user'];
    this.springdummyerror = '';
    this.springdummytest = '';
  }

  getMsgFromSpring() {
    console.log(this.hidummy.executeHiDummyService());
    this.springdummyerror = '';
    this.springdummytest = '';
    this.hidummy.executeHiDummyService().subscribe(
      response => this.handleSuccessResp(response),
      error => this.handleErrorResp(error)
    );
  }

  getMsgFromSpringWithUser() {
    console.log(this.hidummy.executeHiDummyServicewithUser(this.username));
    this.springdummyerror = '';
    this.springdummytest = '';
    this.hidummy.executeHiDummyServicewithUser(this.username).subscribe(
      response => this.handleSuccessResp(response),
      error => this.handleErrorResp(error)
    );
  }

  handleSuccessResp(response:DummyUserObj) {
    console.log(response.firstName);
    this.springdummytest = response.firstName + ' ' + response.lastName + ' ' + response.emailId;
  }

  handleErrorResp(error: HttpErrorResponse) {
    console.log("this is errr : " + error.error.message)
    this.springdummyerror = error.error.message;
  }
}
