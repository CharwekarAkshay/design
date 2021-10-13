import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavMenuButtonComponent } from './components/design/sidenav-menu-button/sidenav-menu-button.component';
import { SidenavMenuSectionComponent } from './components/design/sidenav-menu-section/sidenav-menu-section.component';
import { UserAvatarComponent } from './components/design/user-avatar/user-avatar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserlistSidenavComponent } from './components/userlist-sidenav/userlist-sidenav.component';
import { BrowseComponent } from './components/core/browse/browse.component';
import { WatchlistComponent } from './components/core/watchlist/watchlist.component';
import { SettingsComponent } from './components/core/settings/settings.component';
import { SearchComponent } from './components/design/search/search.component';
import { UserNotificationComponent } from './components/design/user-notification/user-notification.component';
import { MovieBannerComponent } from './components/design/movie-banner/movie-banner.component';
import { DataChipComponent } from './components/design/data-chip/data-chip.component';
import { MovieCardComponent } from './components/design/movie-card/movie-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    UserlistSidenavComponent,
    UserAvatarComponent,
    SidenavComponent,
    SidenavMenuButtonComponent,
    SidenavMenuSectionComponent,
    BrowseComponent,
    WatchlistComponent,
    SettingsComponent,
    SearchComponent,
    UserNotificationComponent,
    MovieBannerComponent,
    DataChipComponent,
    MovieCardComponent,
    MoviesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
