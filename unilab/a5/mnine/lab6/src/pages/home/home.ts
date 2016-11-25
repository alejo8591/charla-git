import { Component } from '@angular/core';
import {SQLite} from "ionic-native";
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public database: SQLite;
  public user: Array<Object>;

  constructor(private navController: NavController, private platform: Platform) {
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
      this.refresh();
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  public add() {
    this.database.executeSql("INSERT INTO user (firstname, lastname) VALUES ('Alejandro', 'Romero')", []).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM user", []).then((data) => {
      this.user = [];
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
          this.user.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

}
