import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/screens/home-screen/home-screen.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'settings', component: SettingsScreenComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
