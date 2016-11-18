import { Component } from '@angular/core';
import { DeviceOrientation, CompassHeading } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data;

  constructor(public navCtrl: NavController) {
  }

  loadInfo() {
    // Get the device current compass heading
    DeviceOrientation.getCurrentHeading().then(
      (data: CompassHeading) => {this.data = data.timestamp; console.log(data)},
      (error: any) => console.log(error)
    );
  }
}
