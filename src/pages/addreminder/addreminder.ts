import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LocationSelect } from '../location-select/location-select';

@IonicPage()
@Component({
  selector: 'page-addreminder',
  templateUrl: 'addreminder.html',
})
export class AddReminderPage {
  name;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  launchLocationPage(){
    
           let modal = this.modalCtrl.create(LocationSelect);
    
           modal.onDidDismiss((location) => {
               console.log(location.name);
              this.name = location.name;
           });
    
           modal.present();   
    
       }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }

}
