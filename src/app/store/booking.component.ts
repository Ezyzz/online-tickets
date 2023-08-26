import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent {

  seatRows = [
    ['empty', 'empty', 'occupied', 'occupied', 'unavailable', 'unavailable'],
    ['empty', 'empty', 'occupied', 'occupied', 'unavailable', 'unavailable'],
    // ... Define more seat rows as needed ...
  ];

  seatNumbers = [1, 2, 3, 4, 5, 6]; // Adjust as needed

  getSeatColor(seatStatus: string): string {
    if (seatStatus === 'occupied') {
      return 'green';
    } else if (seatStatus === 'unavailable') {
      return 'tomato';
    } else {
      return 'lightgrey';
    }
  }

  getSeatIcon(seatStatus: string): string {
    if (seatStatus === 'occupied') {
      return 'fa-solid fa-circle-check';
    } else if (seatStatus === 'unavailable') {
      return 'fa-solid fa-circle-xmark';
    } else {
      return 'fa-solid fa-couch';
    }
  }
}
