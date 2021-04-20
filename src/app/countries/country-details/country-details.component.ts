import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  
  faArrowLeft = faArrowLeft;
  country: Country;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      data => this.getCountry(data.countryCode)
    )
  }

  getCountry(code: string) {
    this.countriesService.getCountryByCountryCode(code).subscribe(
      data => this.country = data
    );
  }
}
