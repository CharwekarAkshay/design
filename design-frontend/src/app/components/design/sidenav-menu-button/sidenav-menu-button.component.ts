import { Component, Input, OnInit } from '@angular/core';
import { SideNavButton } from 'src/app/models/sidenav-button';

@Component({
  selector: 'app-sidenav-menu-button',
  templateUrl: './sidenav-menu-button.component.html',
  styleUrls: ['./sidenav-menu-button.component.scss']
})
export class SidenavMenuButtonComponent implements OnInit {

  @Input() sideNavButton!: SideNavButton;

  constructor() { }

  ngOnInit(): void {
  }

}
