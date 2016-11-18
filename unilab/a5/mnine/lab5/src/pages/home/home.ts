import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data = {
    latitude: 0,
    longitude: 0
  }
  constructor(public navCtrl: NavController) {
  }

  loadInfo() {
    Geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data.latitude = resp.coords.latitude;
      this.data.longitude = resp.coords.longitude;
      console.log(resp.coords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
