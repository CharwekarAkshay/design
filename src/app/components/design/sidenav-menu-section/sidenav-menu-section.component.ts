import { Component, Input, OnInit } from '@angular/core';
import { SidenavSection } from 'src/app/models/sidenav-section';

@Component({
  selector: 'app-sidenav-menu-section',
  templateUrl: './sidenav-menu-section.component.html',
  styleUrls: ['./sidenav-menu-section.component.scss']
})
export class SidenavMenuSectionComponent implements OnInit {

  @Input() sideNavSection!: SidenavSection

  constructor() { }

  ngOnInit(): void {
  }

}
