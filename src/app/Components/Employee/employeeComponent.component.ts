import { employeeDetails } from './../../Interfaces/employeeDetails.interface';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { EmployeeService } from '../../Services/employee.service';

@Component({
    selector: 'employeeComponent',
    templateUrl: 'employeeComponent.component.html'
})
export class EmployeeComponent implements OnInit {
    Rows: Array<employeeDetails> = [];
    clonedRows: Array<employeeDetails> = [];
    isAscending = false;
    searchedName = '';

    constructor(
        private datePipe: DatePipe,
        private employeeService: EmployeeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.Rows = this.employeeService.Rows; 
        this.clonedRows = _.cloneDeep(this.Rows);
        this.Rows = _.forEach(this.Rows, row => {
            row.joining_date = this.datePipe.transform(row.joining_date, 'MM/dd/yyyy'); //new Date(row.joining_date.toDateString());
        });
        console.log(this.Rows);
    }

    sortByName(colName?: string): void {
        this.clonedRows = _.orderBy(this.clonedRows, colName ? colName : "name", this.isAscending ? 'desc' : 'asc');
        this.isAscending = !this.isAscending;
    }

    searchByName(): void {
        this.clonedRows = _.filter(this.Rows, row => {
            return _.startsWith(row.name.toLowerCase(), this.searchedName);
        });
    }

    getDistinctDepartments(): void {
        const url = 'employee/department';
        this.router.navigate([url]);
    }

    removeDepartment(): void {
        this.clonedRows = _.filter(this.Rows, row => {
            return row.department !== 'Development';
        });
    }

    getCandidatesExperienceMoreThanTwoYears(): void {
        this.clonedRows = _.filter(this.Rows, row => {
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate: any = new Date();
            const secondDate: any = new Date(row.joining_date);
            const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
            return diffDays/365 > 2;
        });

    }

    trackItem(index: number, item: any): any {
        return item.id;
    }
}