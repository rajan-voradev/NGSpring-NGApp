import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyDataService, DummyUserObj } from '../service/data/dummy-data.service';

@Component({
  selector: 'app-dummyuser',
  templateUrl: './dummyuser.component.html',
  styleUrls: ['./dummyuser.component.css']
})
export class DummyuserComponent implements OnInit {

  dummy = <DummyUserObj>{};

  constructor(
    private dummyData: DummyDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('dummyuser : ' + this.route.snapshot.params['id']);
    if (this.route.snapshot.params['id'] != -1) {
      this.getDummy(this.route.snapshot.params['id']);
    }
  }

  getDummy(id: number) {
    console.log(id);
    this.dummyData.retrieveDummy(id).subscribe(
      response => {
        console.log(response);
        this.dummy = response;
      }
    );
  }

  saveDummy() {
    console.log("update");
    if (this.dummy.id = -1) {
      this.dummyData.addDummy(this.dummy).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['dummies']);
        }
      );
    } else {
        this.dummyData.updateDummy(this.dummy.id, this.dummy).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['dummies']);
          }
        )
      }
    }
}
