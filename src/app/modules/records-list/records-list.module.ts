import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecordsListRoutingModule } from './records-list-routing.module';
import { RecordsListComponent } from './records-list.component';
import { RecordingModule } from '../recording/recording.module';

@NgModule({
  imports: [
    CommonModule,
    RecordsListRoutingModule,
    RecordingModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [RecordsListComponent]
})
export class RecordsListModule { }
