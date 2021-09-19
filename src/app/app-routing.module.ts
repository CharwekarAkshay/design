import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './components/core/browse/browse.component';
import { SettingsComponent } from './components/core/settings/settings.component';
import { WatchlistComponent } from './components/core/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'browse',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
