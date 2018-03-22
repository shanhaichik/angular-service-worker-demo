import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class StorageService {
  records = new BehaviorSubject([]);
  private _records = new Map();

  static filterDrafts(records) {
    return Array.from(records).filter((record: any) => !record.draft);
  }

  addItem(item: any) {
    this._records.set(item.id, item);
    this.records.next(StorageService.filterDrafts(this._records.values()));
  }

  removeItem(item: any) {
    this._records.delete(item.id);

    this.records.next(StorageService.filterDrafts(this._records.values()));
  }

  getItem(itemId: number) {
    return this._records.get(itemId);
  }

  updateItem(item: any) {
    this._records.set(item.id, item);
    this.records.next(StorageService.filterDrafts(this._records.values()));
  }

}
