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

  dateFrom: string;
  dateTo: string;

  constructor(private http: HttpClient) { }

  calculateDates(){
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;

    let monthString;
    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    this.dateFrom = `${today.getFullYear()}-${monthString}-01`;
    this.dateTo = `${today.getFullYear()}-${monthString}-${lastDay}`;
  }

  private executeQuery<T>(query: string) {
    query = baseUrl + query;
    query += `&api_key=${apiKey}`;
    return this.http.get<T>(query);
  }

  getFeature() {

    this.calculateDates();

    const urlQuery = `/discover/movie?primary_release_date.gte=${this.dateFrom}&primary_release_date.lte=${this.dateTo}`;
    return this.executeQuery<ResponseTMDB>(urlQuery);
  }
}
