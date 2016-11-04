import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from "ionic-angular/es2015";

@Component({
  selector: 'page-movile-detail',
  templateUrl: 'movile-detail.html'
})
export class MovileDetailPage {

  movie: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.movie = navParams.get('movie');
  }

}
