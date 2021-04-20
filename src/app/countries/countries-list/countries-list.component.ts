import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  faSearch = faSearch;
  faAngleDblLeft = faAngleDoubleLeft;
  faAngleDblRight = faAngleDoubleRight;

  showNameErrorMsg = false;

  countries: Country[] = [];
  onePage: Country[] = [];

  paginationSetupObj = {
    page: 1,
    pageSize: 16,
    collectionSize: null,
    numberOfPages: null,
    pageIterator: []
  };

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  // // Pagination Setup
  paginationSetup() {
    this.paginationSetupObj.collectionSize = this.countries.length;
    this.paginationSetupObj.numberOfPages = Math.ceil(this.countries.length / this.paginationSetupObj.pageSize);

    const pageIterator = [];
    for (let i = 0; i < this.paginationSetupObj.numberOfPages; i++) {
      pageIterator.push(i + 1);
    }
    this.paginationSetupObj.pageIterator = pageIterator;

    this.paginationHandler();
  }

  // // Pagination Handler
  paginationHandler(page?: number) {
    this.paginationSetupObj.page = page ? page : 1;

    let trimEnd = this.paginationSetupObj.page * this.paginationSetupObj.pageSize;
    let trimStart = trimEnd - this.paginationSetupObj.pageSize;

    this.onePage = this.countries.slice(trimStart, trimEnd);

    window.scroll(0, 0);
  }

  // Fetching Data
  getAllCountries() {
    this.countriesService.getAllCountries().subscribe(
      data => {
        this.countries = data;
        this.paginationSetup();
      }
    );
  }

  getCountriesByName(name: string, filterRegion?: HTMLSelectElement) {
    if (filterRegion) {
      filterRegion.value = '';  
    }

    if (name.trim() === '') {
      this.getAllCountries();
      this.showNameErrorMsg = false;
    } else {
      this.countriesService.getCountriesByName(name.trim()).subscribe(
        data => {
          this.countries = data;
          this.paginationSetup();
          this.showNameErrorMsg = false;
        },
        err => this.showNameErrorMsg = err.status === 404 ? true : false
      );
    }
  }

  getCountriesByRegion(region: string, searchInput?: HTMLInputElement) {
    if (searchInput) {
      searchInput.value = '';  
    }

    if (region === 'all') {
      this.getAllCountries();
    } else {
      this.countriesService.getCountriesByRegion(region).subscribe(
        data => {
          this.countries = data;
          this.paginationSetup();
        }
      );
    }
  }
}
