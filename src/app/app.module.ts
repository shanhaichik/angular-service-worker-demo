import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainModule } from './modules/main/main.module';
import { RecordsListModule } from './modules/records-list/records-list.module';
import { HeaderComponent } from './components/header/header.component';
import { RecordingService } from '../services/recording.service';
import { StorageService } from '../services/storage.service';
import { RecordFormModule } from './modules/record-form/record-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    RecordsListModule,
    RecordFormModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    MatToolbarModule
  ],
  providers: [RecordingService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
