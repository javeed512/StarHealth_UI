import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  amount:number = 5000;

  //Router

  constructor(private router:Router) {  // Router Service class Injected using Constructor DI



  }

  ngOnInit(): void {

  
  }


getFormData(data:any){

  this.username = data.username;
  this.password = data.password;

  console.log(this.username +" "+ this.password)

  if(this.username == "javeed" && this.password == "tiger"){

    // route to the payment page

      this.router.navigate(['payment/'+this.amount]);  //routerLink in html

  }

}

}

