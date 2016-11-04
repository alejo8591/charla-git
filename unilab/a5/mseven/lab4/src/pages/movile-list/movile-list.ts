import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Movies} from "../../providers/movies";
import {MovileDetailPage} from "../movile-detail/movile-detail";

@Component({
  selector: 'page-movile-list',
  templateUrl: 'movile-list.html',
  providers: [Movies]
})
export class MovileListPage implements OnInit {

  movies_list: any;

  constructor(public navCtrl: NavController, private movies: Movies) {}

  getMovieList() {
    this.movies.list().then(movies => console.log(movies));
  }

  ngOnInit() {
    this.getMovieList();
  }

  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.movies.searchMovies(event.target.value).then(
        data => {
          this.movies_list = data.results;
          console.log(data);
        });
    }
  }

  /*itemTapped(event, movie) {
    console.log(movie);
    this.navCtrl.push(MovileDetailPage, {
      movie: movie
    });
  }*/

}
