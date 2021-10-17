import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './modules/primeng-module';
import { MainContainerComponent } from './components/core/main-container/main-container.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';
import { FormsModule } from '@angular/forms';
import { MovieCarouselComponent } from './components/common/movie-carousel/movie-carousel.component';
import { LanguageListComponent } from './components/common/language-list/language-list.component';
import { MovieDetailsComponent } from './components/screens/movie-details/movie-details.component';
import { MoviesGridComponent } from './components/common/movies-grid/movies-grid.component';
import { MovieCardComponent } from './components/common/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidenavComponent,
    HomeScreenComponent,
    SettingsScreenComponent,
    MovieCarouselComponent,
    LanguageListComponent,
    MovieDetailsComponent,
    MoviesGridComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
