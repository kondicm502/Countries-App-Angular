import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ColorThemeSwitcherComponent } from './core/color-theme-switcher/color-theme-switcher.component';
import { CountryComponent } from './countries/country/country.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { PreloaderComponent } from './core/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorThemeSwitcherComponent,
    CountryComponent,
    CountriesListComponent,
    CountryDetailsComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
