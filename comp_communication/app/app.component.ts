import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Parent component
 

  parentData = "Hi I am Parent";

  dataFromChild:string ="";

  getData(data:any){

    alert("getData() called..")

    console.log(data);

      this.dataFromChild = data;

  }

}
