import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    eid = 102;
    ename = 'tom';
    salary = 990000;

    // take variable

    url:string = "assets/car.jpg";

  

  constructor(private service:EmployeeService) {

    console.log('EmployeeComp obj created...')
   }

  ngOnInit(): void {

    console.log('ngOnInit() is called...');

    

  }


  test(){

      this.service.myservice();

      console.log('test() from emp comp')


  }

  hello(): string{

    alert("Hello friends")

    return "Hello friends again";

  }



}
