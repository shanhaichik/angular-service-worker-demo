import {Component, OnDestroy, OnInit} from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit, OnDestroy {
  records = [];

  constructor(private storage: StorageService,
              private sanitizer: DomSanitizer,
              private router: Router) { }

  ngOnInit() {
    this.storage.records
      .subscribe(records => {
        this.records = this.createVideoLinks(records);
      });
  }

  edit(recordId: number) {
    this.router.navigate(['records', recordId, 'edit'], {queryParams: {from: 'list'}});
  }

  delete(record) {
    this.storage.removeItem(record);
  }

  private createVideoLinks(source: any[]): any[] {
    return source.map(record => {
      record.link = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(record.blob));

      return record;
    });
  }

  ngOnDestroy() {
    this.records.forEach(record =>  URL.revokeObjectURL(record.link));
  }
}
