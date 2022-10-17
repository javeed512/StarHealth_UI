import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DisplayallComponent } from './displayall/displayall.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { EmployeeService } from './employee.service';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayallComponent,
    AddComponent,
    UpdateComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
