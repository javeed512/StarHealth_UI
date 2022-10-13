import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   

  emp:Employee = {"eid":0,"ename":"","salary":0}; 

  constructor() { }

  ngOnInit(): void {
  }


  getFormData(data:Employee){

      console.log(data)


  }


}
