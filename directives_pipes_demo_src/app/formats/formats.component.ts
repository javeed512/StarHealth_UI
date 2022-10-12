import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.css']
})
export class FormatsComponent implements OnInit {

   amount:number = 5000;

  mydate:Date = new Date();

    pi:number = 3.141590;

  constructor() { }

  ngOnInit(): void {
  }

}
