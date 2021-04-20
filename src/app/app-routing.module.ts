import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/countries'},
  {path: 'countries', component: CountriesListComponent},
  {path: 'countries/:countryCode', component: CountryDetailsComponent},
  {path: '**', redirectTo: '/countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
