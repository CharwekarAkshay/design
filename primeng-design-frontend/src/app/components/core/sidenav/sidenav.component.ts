import { Component, ElementRef, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private themeService: ThemeService, private configurationService: ConfigurationService) { }
  currentTheme = 'saga-blue';
  sidenavButtonList: Array<any> = [];

  ngOnInit(): void {
    this.fetchConfiguration();
  }

  fetchConfiguration(): void {
    this.configurationService.getConfigurationByName('sidenavConfiguration').subscribe(response => {
      this.sidenavButtonList = JSON.parse(response.configurationData);
    });
  }
  clickHandler(label: string): void {
    if (label === 'Settings') {
      this.changeTheme();
    }
  }

  changeTheme() {
    if (this.currentTheme === 'saga-blue') {
      this.themeService.switchTheme('vela-blue');
      this.currentTheme = 'vela-blue';
    } else {
      this.themeService.switchTheme('saga-blue');
      this.currentTheme = 'saga-blue';
    }
  }


}
