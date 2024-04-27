import {Component} from '@angular/core';
import {BackendService} from "./app.backendService";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="number" [(ngModel)]="tourId" placeholder="Enter Tour ID">
      <button (click)="getTourLog()">Get Tour Log</button>
      <div *ngIf="message">
        <h1>{{ message }}</h1>
      </div>
    </div>
  `
})

export class AppComponent {
  title = 'SWEN2_Tourplanner';
  message: string | undefined;
  tourId: number | undefined;

  constructor(private backendService: BackendService) {
  }

  getTourLog() {
    if(this.tourId) {
      this.backendService.getTourListByTourId(this.tourId).subscribe(
        (response) => {
          this.message = JSON.stringify(response); //assuming that response is an object or array
        },
        (error) => {
          console.error('Error fetching TourLog by ID:', error);
          this.message = 'Error fetching TourLog by ID';
        }
      );
    } else {
      this.message = 'Please enter a Tour ID: ';
    }

  }
}
