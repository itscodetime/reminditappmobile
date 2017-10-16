
import { Component } from '@angular/core';

import { RemindersPage } from '../reminders/reminders';
import { MapviewPage } from '../mapview/mapview';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RemindersPage;
  tab2Root = MapviewPage;

  constructor() {

  }
}
