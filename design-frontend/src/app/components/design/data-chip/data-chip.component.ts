import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-chip',
  templateUrl: './data-chip.component.html',
  styleUrls: ['./data-chip.component.scss']
})
export class DataChipComponent implements OnInit {

  @Input() data: string = '';
  @Input() backgroundColor: string = '';
  @Input() fontColor: string = '';
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
