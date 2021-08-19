import { EmployeeComponent } from './Components/Employee/employeeComponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { departmentComponent } from './Components/Department/department.component';
import { EmployeeService } from './Services/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    departmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DatePipe, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
