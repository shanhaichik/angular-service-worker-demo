import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogRecordingComponent } from './components/recordingDialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent {

  constructor(private dialog: MatDialog,
              private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogRecordingComponent, {
      width: '500px',
      hasBackdrop: true,
      closeOnNavigation: true
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        this.router.navigate(['records', result, 'edit']);
      });
  }
}

