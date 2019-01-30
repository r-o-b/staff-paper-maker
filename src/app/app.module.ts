import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { AppTimesDirective } from './times.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StaffComponent, AppTimesDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
