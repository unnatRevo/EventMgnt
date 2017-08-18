import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user-login/user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const appRoute: Routes = [
  { path: '',
  redirectTo: 'login',
  pathMatch: 'full'
} ,
  { path: 'login', component: UserComponent},
  { path: 'registration', component: UserRegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
