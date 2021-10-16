import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.scss']
})
export class SettingsScreenComponent implements OnInit {

  isDark = false;

  constructor(private themeService: ThemeService) { }


  ngOnInit(): void {
    this.themeService.themeSubscription.subscribe(value => {
      this.isDark = value;
    });
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
