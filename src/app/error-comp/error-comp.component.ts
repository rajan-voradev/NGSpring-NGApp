import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-comp',
  templateUrl: './error-comp.component.html',
  styleUrls: ['./error-comp.component.css']
})
export class ErrorCompComponent implements OnInit {

  errorMsg = 'An error occured!! Help****'
  constructor() { }

  ngOnInit(): void {
  }

}
