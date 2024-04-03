import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  email: string;
  number: number;
  // action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {email: 'example@gmail.com', name: 'John Doe', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Smith John', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Illiana', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Olivia', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Sophia', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Liam', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Ethan', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Haley', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Ellie', number: 9098768011,},
  {email: 'example@gmail.com', name: 'Harper', number: 9098768011,},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'number', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

}
