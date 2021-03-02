import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any[] = [];

  settings = {
    actions:false,
    columns: {
      // id: {
      //   title: 'ID',
      // },
      location: {
        title: 'Location',
        filter: false
      },
      number_of_nights_with_places: {
        title:'Number of Night',
        filter: false
      },
      date_of_arrival: {
        title: 'Date',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      mobile: {
        title: 'Mobile',
        filter: false
      }
    }
  };

  constructor(private httpService: HttpService,
              private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.spinnerService.run();
    this.httpService.get('contact/').subscribe(res => {
      this.quotes = res;
      this.spinnerService.stop();
    }, err => {
      this.spinnerService.stop();
    })
  }

}
