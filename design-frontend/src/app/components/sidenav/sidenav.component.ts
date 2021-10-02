import { Component, OnInit } from '@angular/core';
import { SidenavSection } from 'src/app/models/sidenav-section';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sideNavSectionList: Array<SidenavSection> = [];

  constructor(private sideNavService: SidenavService) { }

  ngOnInit(): void {
    this.sideNavService.getSideNavSectionList().subscribe(list => {
      this.sideNavSectionList = list;
    });
  }

}
