import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageListComponent } from './components/common/language-list/language-list.component';
import { MovieCardComponent } from './components/common/movie-card/movie-card.component';
import { MovieCarouselComponent } from './components/common/movie-carousel/movie-carousel.component';
import { MoviesGridComponent } from './components/common/movies-grid/movies-grid.component';
import { MainContainerComponent } from './components/core/main-container/main-container.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { MovieDetailsComponent } from './components/screens/movie-details/movie-details.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';
import { PrimengModule } from './modules/primeng-module';
import { MovieDetailRatingComponent } from './components/common/movie-detail-rating/movie-detail-rating.component';
import { ImdbRatingComponent } from './components/common/imdb-rating/imdb-rating.component';
import { AuthorizationComponent } from './components/screens/authorization/authorization.component';
import { LoginComponent } from './components/common/login/login.component';
import { SignupComponent } from './components/common/signup/signup.component';
import { SingleContainerComponent } from './components/core/single-container/single-container.component';

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
    MovieCardComponent,
    MovieDetailRatingComponent,
    ImdbRatingComponent,
    AuthorizationComponent,
    LoginComponent,
    SignupComponent,
    SingleContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
