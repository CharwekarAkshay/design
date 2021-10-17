import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  numbers!:Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.numbers = Array(500).fill(1).map((x,i)=>i);
  }

}
