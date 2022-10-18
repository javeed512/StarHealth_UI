import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to angular';

    salary = 90000;
    ename = "javeed";


    isValid():Boolean{

      return true;

    }


}
