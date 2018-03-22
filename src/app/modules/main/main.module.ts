import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
