import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  position: number;
  studentnumber: number;
  name : string;
  department : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, studentnumber: 17001847, name: 'Bernhardt',department: 'H'},
];

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'studentnumber', 'name', 'department'];
  dataSource = ELEMENT_DATA;
}