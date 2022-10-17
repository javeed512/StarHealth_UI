import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Employee } from './employee';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// HttpClient service
  constructor(private http:HttpClient) { }

 // url:string = "http://localhost:3000/employees"

   url:string = "http://localhost:8080/api/v1/employees";

  getAll():Observable<Employee[]>{

   return   this.http.get<Employee[]>(this.url+'/getall');  // all http methods return Observables


  }


  insert(empObj:Employee){

    console.log(empObj)
    return  this.http.post<Employee>(this.url+'/add',empObj).subscribe( (data:Employee) => {console.log('data from post '+data)});


  }


  deleteById(id:number):Observable<string>{

   // alert('delete from service '+id)

     return   this.http.delete<string>(this.url+'/delete/'+id);

  }

  update(updateObj:Employee){

   return   this.http.put<Employee>(this.url+'/update',updateObj).subscribe((data:Employee)=>console.log(data));

  }



}



