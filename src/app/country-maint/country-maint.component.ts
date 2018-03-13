import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {
  countries: Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) {
    this.dataService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }
  ngOnInit() {

  }
  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail/', id, 'details']);

  }
  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail/', id, 'edit']);

  }
  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }
  deleteCountryQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }
  deleteCountry(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCountry(id)
      .subscribe(
        c => this.cancelDelete(),
        err => { this.deleteError = err; this.isDeleting = false; }
      );

  }
  createCountry() {
    this.router.navigate(['/authenticated/country-detail/', 0, 'create']);
  }

}
