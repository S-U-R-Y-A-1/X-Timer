import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppsPgComponent } from './apps-pg/apps-pg.component';
import { SeriesAndAnimePgComponent } from './series-and-anime-pg/series-and-anime-pg.component';
import { BooksPgComponent } from './books-pg/books-pg.component';
import { WhoAreYouPgComponent } from './who-are-you-pg/who-are-you-pg.component';
import { ProfileComponent } from './profile/profile.component';
import { AppMainComponent } from './app-main/app-main.component';
import { SeriesMainComponent } from './series-main/series-main.component';
import { AnimeMainComponent } from './anime-main/anime-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'service';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from 'signup.service';
import { SharedService } from 'db.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    AppsPgComponent,
    SeriesAndAnimePgComponent,
    BooksPgComponent,
    WhoAreYouPgComponent,
    ProfileComponent,
    AppMainComponent,
    SeriesMainComponent,
    AnimeMainComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [AuthService,SignupService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
