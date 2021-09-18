import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  modalState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav():void {
    this.modalState = !this.modalState;
  }
}
