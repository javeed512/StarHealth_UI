import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  myservice(){

    console.log('this is service() from Emp service');


  }

}
