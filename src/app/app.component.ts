import { Component } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DatetimePickerDialogComponent } from './datetime-picker-dialog/datetime-picker-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private dialogService: DialogService) {
  }

  onOpenDialog(): void {
    this.dialogService.open({
      title: 'Date time picker',
      content: DatetimePickerDialogComponent,
      actions: [{ text: 'Cancel' }],
    });
  }
}
