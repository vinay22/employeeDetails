import { employeeDetails } from './../Interfaces/employeeDetails.interface';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class EmployeeService {
    Rows: Array<employeeDetails> = [
        { "id": 11, "name": "Ash", "department": "Finance", "joining_date": '10/08/2016' },
        { "id": 12, "name": "John", "department": "HR", "joining_date": '01/18/2011' },
        { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": '11/28/2019' },
        { "id": 14, "name": "Vish", "department": "Development", "joining_date": '07/07/2017' },
        { "id": 15, "name": "Barry", "department": "Operations", "joining_date": '08/19/2014' },
        { "id": 16, "name": "Ady", "department": "Finance", "joining_date": '10/05/2014' },
        { "id": 17, "name": "Gare", "department": "Development", "joining_date": '04/06/2014' },
        { "id": 18, "name": "Hola", "department": "Development", "joining_date": '12/08/2010' },
        { "id": 19, "name": "Ola", "department": "HR", "joining_date": '05/07/2011' },
        { "id": 20, "name": "Kim", "department": "Finance", "joining_date": '10/20/2010' }
    ];
    
    private _departmentData : Array<any> = [];
    get departmentData(): Array<any> {
        return this._departmentData;
    }

    set departmentData(data: Array<any>) {
        this._departmentData = data;
    }
    constructor() {
        this.getDistinctDepartments();
    }

    getDistinctDepartments(): void {
        const groupedDepartments = _.groupBy(this.Rows, 'department'); 
        const distinctDepartments = _.map(groupedDepartments, (value, key) => {
            return {name: key, count: value.length};
        });
        this._departmentData = distinctDepartments;
    }

}