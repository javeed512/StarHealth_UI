import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {

  emp:Employee = new Employee();

  empList:Employee[] =[];

  constructor(private service:EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }


  
  getAllEmployees(){
    

    this.service.getAll().subscribe((employees: Employee[]) => {this.empList = employees;console.log(this.empList)});

}


deleteById(id:number){

// delete service methods call here

    alert('deleting record with id '+id)

  this.service.deleteById(id).subscribe( (status:string) => {console.log(status)});


}

openUpdate(id:number){


    this.route.navigate(['/update/'+id]);

}


}
