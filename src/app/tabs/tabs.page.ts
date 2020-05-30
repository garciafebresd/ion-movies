import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../interfaces/responseTMDB.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  recentMovies: Movies[];

  constructor(private moviesService: MoviesService) {

    this.getFeature();
  }


  getFeature() {
    this.moviesService.getFeature().subscribe((response) => {
      console.log('response', response);
      this.recentMovies = response.results;
    });
  }
}
