import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  template: '<h1>WELCOME TO DEPT {{title}}</h1>',
  styles: ['h1{color:red;}']
})
export class DeptComponent implements OnInit {

  title = "Dept component"

  constructor() { }

  ngOnInit(): void {
  }

}
