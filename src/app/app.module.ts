import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DatetimePickerDialogComponent } from './datetime-picker-dialog/datetime-picker-dialog.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';



@NgModule({
  declarations: [
    AppComponent,
    DatetimePickerDialogComponent
  ],
  imports: [
    BrowserModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    DialogsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
