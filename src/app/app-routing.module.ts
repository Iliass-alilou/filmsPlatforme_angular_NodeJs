import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Authentification/signin/signin.component';
import { SignupComponent } from './Authentification/signup/signup.component';
import { FavoriesComponent } from './favories/favories.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  {path: '', component: FilmsComponent },
  {path: 'sign-up', component: SignupComponent },
  {path: 'sign-in', component: SigninComponent },
  {path : 'films', component:FilmsComponent},
  {path : 'DetailFilm/:id', component:FilmDetailComponent},
  {path : 'favoris', component:FavoriesComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo:"not-found" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
