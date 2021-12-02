import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../Models/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  filmDetail : any;
  film;
  filmsSubscription: Subscription = new Subscription();
  isFavoris = false;
  urlVideo: SafeResourceUrl = "";
  revues;

  constructor(public service: FilmService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.service.getFilmById(this.route.params["_value"]["idmovie"])
    this.filmsSubscription = this.service.filmsSubject.subscribe(rsp => {
      this.film = rsp as Film;
      document.title = "" + rsp["title"]
      this.getAllRevues();
    })
    this.service.emitFilmsSubject()
  }
  
  getAllRevues() {
    if(this.film.id!=undefined){
      this.service.getAllRevues(this.film.id).subscribe(rsp => {
        this.revues = rsp
      })
    }
  }

  getFilmImage(pathImage:String){
    
    this.service.getImage(pathImage)
    console.log(this.service.getImage(pathImage))
  }
  

  addFavoris() {
    this.isFavoris = true;
    this.service.addFavoris(this.film);
  }

  removeFavoris() {
    this.isFavoris = false;
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(res=>{
      const idFilm = res.get("id");
      this.service.getDetailFilm(idFilm).subscribe(data=>{
        this.filmDetail = data;
      });
    })
  }


}
