import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.sass']
})
export class GradesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  position: number;
  subject: string;
  subjectcode: number;
  mark: number;
  exam: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, subject: 'Math', subjectcode: 122, mark: 100, exam: 'thuto'},
];

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'subect', 'subjectcode', 'mark', 'exam'];
  dataSource = ELEMENT_DATA;
}