import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/common/login/login.component';
import { SignupComponent } from './components/common/signup/signup.component';
import { AuthorizationComponent } from './components/screens/authorization/authorization.component';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { MovieDetailsComponent } from './components/screens/movie-details/movie-details.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeScreenComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'settings',
    component: SettingsScreenComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'movie-detail/:movieId',
    component: MovieDetailsComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { useSingleContainer: true },
      },
      { path: 'signup', component: SignupComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'login' },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
