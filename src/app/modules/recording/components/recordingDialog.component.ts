import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RecordingService} from '../../../../services/recording.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-dialog-recording',
  templateUrl: 'recording-dialog-template.html',
  styleUrls: ['./recording-dialog.component.css']
})
export class DialogRecordingComponent implements OnInit, OnDestroy {
  @ViewChild('preview', {read: ElementRef}) preview: ElementRef;
  private destroyStream = new Subject();

  constructor(public dialogRef: MatDialogRef<DialogRecordingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public record: RecordingService) { }

  ngOnInit() {
    this.record.previewStream
      .pipe(
        takeUntil(this.destroyStream)
      )
      .subscribe(stream => {
        this.preview.nativeElement.srcObject = stream;
      });
  }

  start() {
    this.record.startRecording();
  }

  stop() {
     this.record.stopRecording()
       .then(recordId => {
         setTimeout(() => {
           this.dialogRef.close(recordId);
         }, 100);
       });
  }

  ngOnDestroy() {
    this.destroyStream.next();
    this.destroyStream.complete();
  }

}
