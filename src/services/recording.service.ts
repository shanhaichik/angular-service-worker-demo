import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {StorageService} from './storage.service';

declare var MediaRecorder: any;

const CONSTRAINTS = {
  video: true,
  audio: true
};

@Injectable()
export class RecordingService {
  readonly previewStream: Subject<any> = new Subject<any>();
  private recordStream;
  private recorder;
  private xId = 0;

  constructor(private storage: StorageService) {}

  get isRecording(): boolean {
    return this.recorder && this.recorder.state === 'recording';
  }

  async startRecording() {
    try {
        this.recordStream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);

        this.previewStream.next(this.recordStream);
        this.recordingStream();
    } catch (e) {

    }
  }

  stopRecording() {
    this.xId++;
    this.recorder.stop();

    return Promise.resolve(this.xId);
  }

  private recordingStream() {
    let data = [];
    this.recorder = new MediaRecorder(this.recordStream);

    this.recorder.ondataavailable = event => data.push(event.data);
    this.recorder.onstop = () => {
      this.recordStream.getTracks().forEach(track => track.stop());

      this.storage.addItem({
        id: this.xId,
        blob: new Blob(data, { type: 'video/webm' }),
        draft: true
      });

      data = [];
    };

    this.recorder.start();
  }
}
