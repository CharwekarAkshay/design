import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userlist-sidenav',
  templateUrl: './userlist-sidenav.component.html',
  styleUrls: ['./userlist-sidenav.component.scss']
})
export class UserlistSidenavComponent implements OnInit {

  @Output() sideNavState: EventEmitter<boolean> = new EventEmitter();
  sideNavBoolState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sideNavBoolState = !this.sideNavBoolState;
    this.sideNavState.emit(this.sideNavBoolState);
  }

}
