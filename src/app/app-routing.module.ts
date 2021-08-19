import { EmployeeComponent } from './Components/Employee/employeeComponent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { departmentComponent } from './Components/Department/department.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  {
    path: 'employee',
    children: [
      { path: '', component: EmployeeComponent },
      { path: 'department', component: departmentComponent }
    ]
  },
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
