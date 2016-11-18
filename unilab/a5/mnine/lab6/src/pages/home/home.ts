import { Component } from '@angular/core';
import {SQLite} from "ionic-native";
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public database: SQLite;
  public users: Array<Object>;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
      this.refresh();
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM user", []).then((data) => {
      this.users = [];
      if(data.rows.length > 0) {
        for(let i = 0; i < data.rows.length; i++) {
          this.users.push({
            first_name: data.rows.item(i).first_name,
            last_name: data.rows.item(i).last_name,
            phone: data.rows.item(i).phone
          });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

  public add() {
    this.database.executeSql('INSERT INTO user (first_name, last_name, phone) VALUES (?, ?, ?)', ["Alejandro", "Romero", "3005094218"]).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

}
