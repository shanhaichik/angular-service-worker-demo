import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';


import { RecordingComponent } from './recording.component';
import { DialogRecordingComponent } from './components/recordingDialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [DialogRecordingComponent],
  declarations: [RecordingComponent, DialogRecordingComponent],
  exports: [RecordingComponent, DialogRecordingComponent]
})
export class RecordingModule { }
