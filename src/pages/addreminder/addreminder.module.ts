import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReminderPage } from './addreminder';

@NgModule({
  declarations: [
    AddReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReminderPage),
  ],
})
export class AddReminderPageModule {}
