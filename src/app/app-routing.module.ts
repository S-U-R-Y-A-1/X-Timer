import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppsPgComponent } from './apps-pg/apps-pg.component';
import { BooksPgComponent } from './books-pg/books-pg.component';
import { SeriesAndAnimePgComponent } from './series-and-anime-pg/series-and-anime-pg.component';
import { ProfileComponent } from './profile/profile.component';
import { WhoAreYouPgComponent } from './who-are-you-pg/who-are-you-pg.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AnimeMainComponent } from './anime-main/anime-main.component';
import { SeriesMainComponent } from './series-main/series-main.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path : 'home-page',component:HomePageComponent},
  {path:'apps-pg',component:AppsPgComponent},
  {path:'books-pg',component:BooksPgComponent},
  {path:'series-and-anime-pg',component:SeriesAndAnimePgComponent},
  {path:'profile',component:ProfileComponent},
  {path:'who-are-you-pg',component:WhoAreYouPgComponent},
  {path:'app-main',component:AppMainComponent},
  {path:'series-main',component:SeriesMainComponent},
  {path:'anime-main',component:AnimeMainComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
