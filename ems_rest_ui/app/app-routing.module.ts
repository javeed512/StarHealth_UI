import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

      {path:'displayall', component:DisplayallComponent},
      {path:'add',component:AddComponent},
      {path:'update/:id',component:UpdateComponent},
      {path:'update',component:UpdateComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
