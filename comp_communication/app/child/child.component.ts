import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childInput:string = '';

 
  @Output()
  eventObj: EventEmitter<string> = new EventEmitter();

  childData:string = "Hi I am Child";


  sendData(){

    this.eventObj.emit(this.childData);


  }



  constructor() { 

   

  }

  ngOnInit(): void {
  }

}
