import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
    selector: 'department',
    templateUrl: 'department.component.html'
})
export class departmentComponent implements OnInit {
    distinctDepartments: Array<any> = [];
    constructor(private employeeService: EmployeeService) { }

    ngOnInit() { 
        this.distinctDepartments = this.employeeService.departmentData;
    }

}