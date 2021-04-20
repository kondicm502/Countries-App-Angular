import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all`).pipe(
      map(data => data.map(el => new Country(el)))
    );
  }

  getCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${name}`).pipe(
      map(data => data.map(el => new Country(el)))
    );
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}`).pipe(
      map(data => data.map(el => new Country(el)))
    );
  }

  getCountryByCountryCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${code}`).pipe(
      map(data => new Country(data))
    );
  }
}
