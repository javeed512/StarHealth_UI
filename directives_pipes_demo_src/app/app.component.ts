import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';

  mybgcolor = 'pink';

  mycolor = 'red';

  flag:boolean = true;

  choice:string = "";

  course:string = "";

  names:string[] = ["javeed","rahul","jaswanth","sumit","nitesh"];



}
