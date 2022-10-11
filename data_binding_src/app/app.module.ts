import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
