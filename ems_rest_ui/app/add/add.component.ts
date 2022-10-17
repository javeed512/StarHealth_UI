import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  
})
export class AddComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }


  insertFormData(data:Employee){

      this.service.insert(data);

      alert("Employee Added Successfully!");

  }

}
