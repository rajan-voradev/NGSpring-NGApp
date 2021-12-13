import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyDataService } from '../service/data/dummy-data.service';

export class DummyUserObj {
  constructor(
    public id: any,
    public firstName: string,
    public lastName: string,
    public emailId: string) { }
}

@Component({
  selector: 'app-list-dummies',
  templateUrl: './list-dummies.component.html',
  styleUrls: ['./list-dummies.component.css']
})
  
export class ListDummiesComponent implements OnInit {
  message:string = '';
  // dummies = 
  //   [
  //   new Dummy(1, 'Rajan', 'Vora', 'rajanvora@yahoo.com', true, new Date()),
  //   new Dummy(2, 'James', 'Dean', 'jamesdean@yahoo.com', true, new Date())
  // ]
 
  dummies: DummyUserObj[] = [];
    constructor(
      private dummyData: DummyDataService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getDummies();
  }

  getDummies() {
    this.dummyData.retrieveAllDummies().subscribe(
      response => {
        console.log(response);
        this.dummies = response;
      }
    );
  }

  deleteDummy(id:any): void {
    console.log('delete dummy : '+id);
    this.dummyData.deleteDummy(id).subscribe(
      response => {
        console.log(response);
        this.message = `Dummy Deleted!!! ${id}`;
        this.getDummies();
      }
    )
  }

  updateDummy(id:any): void {
    console.log('update dummy : ' + id);
    this.router.navigate(['dummy', id]);
  }

  addDummy() {
    this.router.navigate(['dummy', -1]);
  }  

}
