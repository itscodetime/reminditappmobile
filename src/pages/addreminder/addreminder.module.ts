import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddreminderPage } from './addreminder';

@NgModule({
  declarations: [
    AddreminderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddreminderPage),
  ],
})
export class AddreminderPageModule {}
