"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_native_1 = require("ionic-native");
var HomePage = (function () {
    function HomePage(navCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.database = new ionic_native_1.SQLite();
        this.database.openDatabase({ name: "data.db", location: "default" }).then(function () {
            _this.refresh();
        }, function (error) {
            console.log("ERROR: ", error);
        });
    }
    HomePage.prototype.refresh = function () {
        var _this = this;
        this.database.executeSql("SELECT * FROM user", []).then(function (data) {
            _this.users = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    _this.users.push({
                        first_name: data.rows.item(i).first_name,
                        last_name: data.rows.item(i).last_name,
                        phone: data.rows.item(i).phone
                    });
                }
            }
        }, function (error) {
            console.log("ERROR: " + JSON.stringify(error));
        });
    };
    HomePage.prototype.add = function () {
        this.database.executeSql('INSERT INTO user (first_name, last_name, phone) VALUES (?, ?, ?)', ["Alejandro", "Romero", "3005094218"]).then(function (data) {
            console.log("INSERTED: " + JSON.stringify(data));
        }, function (error) {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
