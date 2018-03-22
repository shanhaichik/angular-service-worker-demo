import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private update: SwUpdate,
              private push: SwPush) {}

  ngOnInit() {
    if (this.update.isEnabled) {
      this.update.activated.subscribe((resp) => {
        console.log(resp, 'activated');
      });

      this.update.activateUpdate();
      this.update.checkForUpdate();

      this.update.available.subscribe((resp) => {
        console.log(resp, 'available');
      });
    }
  }
}
