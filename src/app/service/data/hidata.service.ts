import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class DummyUserObj {
  constructor(public firstName: string,
    public lastName: string,
    public emailId: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class HidataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHiDummyService() {
    //console.log("Execute Hi Dummies in Spring..");
    return this.http.get<DummyUserObj>('http://localhost:8080/pdrepspring/api/v1/hidummies');
  }

    executeHiDummyServicewithUser(user:string) {
    //console.log("Execute Hi Dummies in Spring..");
    return this.http.get<DummyUserObj>(`http://localhost:8080/pdrepspring/api/v1/hidummy/${user}`);
  }
}
