import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StorageService } from '../../../services/storage.service';



@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit, OnDestroy {
  @ViewChild('recording', {read: ElementRef}) recording: ElementRef;
  item: any;
  form: FormGroup;
  isEdit = false;
  private itemId: number;
  private videoUrl: string;

  constructor(private storage: StorageService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.params.id || 0;
    this.item = this.storage.getItem(Number(this.itemId));
    this.isEdit = !!this.route.snapshot.queryParams.from || false;

    if (!this.item) {
        this.goBack();
        return;
    }

    this.initForm();
  }

  initForm() {
    this.videoUrl = URL.createObjectURL(this.item.blob);
    this.recording.nativeElement.src = this.videoUrl;

    const {name = '', description = ''} = this.item;

    this.form = this.fb.group({
      name: [name, Validators.required],
      description: [description]
    });
  }

  save() {
    const data = Object.assign(this.item, this.form.value, {
      draft: false
    });

    this.storage.updateItem(data);
    this.goBack();
  }

  delete() {
    this.storage.removeItem(this.item);
    this.goBack();
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.videoUrl);
  }

  private goBack() {
    this.router.navigate(['records']);
  }

}
