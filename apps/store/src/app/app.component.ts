import { Component, Pipe, PipeTransform } from '@angular/core';
import { getAllGames } from '../fake-api';
import { formatRating } from '@bg-hoard/store-app/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
  formatRating = formatRating;
}

@Pipe({ name: 'formatRating' })
export class FormatRatingPipe implements PipeTransform {
  transform(x: number): string {
    return formatRating(x);
  }
}
