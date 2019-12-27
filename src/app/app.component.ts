import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fetching';
/*  employees = new Array<IEmployee>();
  constructor(empService: EmployeeService) {
    empService.getEmployees().subscribe(response => 
      {this.employees = response.map(item => {
        return new IEmployee(
            item.id,
            item.name,
            item.age
          );
      });
     });
  } */
}
