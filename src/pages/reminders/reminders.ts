
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddReminderPage } from './../addreminder/addreminder';

@IonicPage()
@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html',
})
export class RemindersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToAddReminder(params){
    if (!params) params = {};
    this.navCtrl.push(AddReminderPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RemindersPage');
  }

}
