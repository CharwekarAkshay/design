import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  items!: MenuItem[];
  currentTheme = 'saga-blue';

  ngOnInit(): void {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];
  }

  changeTheme() {
    if (this.currentTheme === 'saga-blue') {
      this.themeService.swtichTheme('vela-blue');
      this.currentTheme = 'vela-blue';
    }else {
      this.themeService.swtichTheme('saga-blue');
      this.currentTheme = 'saga-blue';
    }  
  }


}
