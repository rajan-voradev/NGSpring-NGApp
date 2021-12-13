import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class DummyUserObj {
  constructor(
    public id:any,
    public firstName: string,
    public lastName: string,
    public emailId: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor(
    private http: HttpClient) { }

  retrieveAllDummies(){
    //console.log("Execute Hi Dummies in Spring..");
    return this.http.get <DummyUserObj[]>('http://localhost:8080/pdrepspring/api/v1/dummyusers');
  }

  retrieveDummy(id:number){
    console.log("Execute Hi Dummies in Spring.."+id);
    return this.http.get<DummyUserObj>(`http://localhost:8080/pdrepspring/api/v1/dummyuser/${id}`);
  }

  deleteDummy(id:any) {
    return this.http.delete<DummyUserObj[]>(`http://localhost:8080/pdrepspring/api/v1/dummyuser/${id}`);
  }

  updateDummy(id:number, dummyuser: DummyUserObj) {
    console.log("Execute Hi Dummies in Spring.."+id);
    return this.http.put<DummyUserObj>(`http://localhost:8080/pdrepspring/api/v1/dummyusers/${id}`, dummyuser);
  }

  addDummy(dummyuser: DummyUserObj) {
    console.log("service add Dummy");
    return this.http.post<DummyUserObj>(`http://localhost:8080/pdrepspring/api/v1/dummyusers`, dummyuser);
  }
}
