import { Component } from '@angular/core';
import { DBMeter } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DBMeter]
})
export class HomePage {
  data:any;
  reading: any = 0;

  constructor(public navCtrl: NavController) {

  }

  start(){

      let subscription = DBMeter.start().subscribe(
        data => this.reading = data
      );

  }

}
