import { Component } from '@angular/core';
import { DeviceMotion, AccelerationData } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data = {
    x: 0,
    y: 0,
    z: 0,
    timestamp: 0
  };

  constructor(public navCtrl: NavController) {

  }

  loadInfo() {
    DeviceMotion.getCurrentAcceleration().then(
      (acceleration: AccelerationData) => {
        this.data.x = acceleration.x;
        this.data.y = acceleration.y;
        this.data.z = acceleration.z;
        this.data.timestamp = acceleration.timestamp;
        console.log(acceleration);
      },
      (error: any) => console.log(error)
    );
  }
}
