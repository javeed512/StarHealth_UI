import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number = 0;

  constructor(private service:EmployeeService ,private route:ActivatedRoute) {


    route.params.subscribe( (param:any) => {this.id = param['id']; console.log(this.id)});
   }

  ngOnInit(): void {
  }



  updateEmployee(data:Employee){

      console.log('updating data '+data)

      this.service.update(data);

      alert("Employee Updated Successfully!")

  }


}
