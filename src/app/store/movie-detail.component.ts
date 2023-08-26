import { Component } from '@angular/core';
import { Movie } from '../model/theater.model';

@Component({
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailsComponent {
    constructor(public Movie: Movie) {}
}