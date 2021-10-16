import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { MovieDetailsComponent } from './components/screens/movie-details/movie-details.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'settings', component: SettingsScreenComponent },
  { path: 'movie-detail/:movieId', component: MovieDetailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
