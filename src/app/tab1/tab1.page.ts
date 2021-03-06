import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { ResponseTMDB, Movies } from '../interfaces/responseTMDB.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movies[];

  slideOptions = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.getFeature();
  }

  getFeature() {
    this.moviesService.getFeature().subscribe((response) => {
      console.log('response', response);
      this.recentMovies = response.results;

    });
  }
}
