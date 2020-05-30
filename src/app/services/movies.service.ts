import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseTMDB } from '../interfaces/responseTMDB.interface';

const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    const urlQuery = `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${apiKey}`;
    return this.http.get<ResponseTMDB>(`${baseUrl}${urlQuery}`);
  }
}
