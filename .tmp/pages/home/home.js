import { Component } from '@angular/core';
import { DBMeter } from 'ionic-native';
import { NavController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.reading = 0;
    }
    HomePage.prototype.start = function () {
        var _this = this;
        var subscription = DBMeter.start().subscribe(function (data) { return _this.reading = data; });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html',
                    providers: [DBMeter]
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());
