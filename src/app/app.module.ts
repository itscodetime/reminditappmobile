import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapviewPage } from '../pages/mapview/mapview';
import { RemindersPage } from '../pages/reminders/reminders';
import { AddReminderPage } from '../pages/addreminder/addreminder';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationSelect } from '../pages/location-select/location-select';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Connectivity } from '../providers/connectivity-service/connectivity-service';
import { GoogleMaps } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    MapviewPage,
    RemindersPage,
    AddReminderPage,
    TabsPage,
    LocationSelect
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapviewPage,
    RemindersPage,
    AddReminderPage,
    TabsPage,
    LocationSelect
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Connectivity,
    GoogleMaps,
    Network
  ]
})
export class AppModule {}
