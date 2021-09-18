import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { UserlistSidenavComponent } from './components/userlist-sidenav/userlist-sidenav.component';
import { UserAvatarComponent } from './components/design/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    UserlistSidenavComponent,
    UserAvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
