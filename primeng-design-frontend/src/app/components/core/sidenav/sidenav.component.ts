import { Component, OnInit } from '@angular/core';
import { SidenavButton } from 'src/app/models/sidenav-button';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }
  sidenavButtonList: Array<SidenavButton> = [];

  ngOnInit(): void {
    this.fetchConfiguration();
  }

  fetchConfiguration(): void {
    this.configurationService.getConfigurationByName('sidenavConfiguration').subscribe(response => {
      this.sidenavButtonList = JSON.parse(response.configurationData);
    });
  }
}
