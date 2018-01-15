import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBar, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReadingService} from "./reading.service";
import {UserService} from "./user.service";
import {ChartsModule} from 'ng2-charts';
import {MomentModule} from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    ChartsModule,
    MomentModule
  ],
  providers: [
    ReadingService,
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
