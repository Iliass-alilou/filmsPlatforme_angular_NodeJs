import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from '../Models/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-favories',
  templateUrl: './favories.component.html',
  styleUrls: ['./favories.component.scss']
})
export class FavoriesComponent implements OnInit {

  films: Array<Film> = [];

  filmsSubscription: Subscription = new Subscription();
  constructor(public service: FilmService) {
    document.title ="Favoris";
    this.service.getAllFavoris();
    this.filmsSubscription = this.service.filmFavorisSubject.subscribe((rsp) => {
      this.films=[];
      for(var i in rsp){
        this.films.push(rsp[i] as Film)
      }
    })
    this.service.emitFilmsFavorisSubject()
  }

  ngOnInit(): void {
  }
}
