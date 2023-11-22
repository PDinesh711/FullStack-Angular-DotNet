import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent } ,
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent } ,
  {path:'edit' , component:AddEditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
