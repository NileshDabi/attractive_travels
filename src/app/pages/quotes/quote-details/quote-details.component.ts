import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quotes: any[] = [];

  settings = {
    actions:false,
    columns: {
      user: {
        title: 'Agent ID',
        filter: true
      },
      location: {
        title: 'Location',
        filter: true,
        // valuePrepareFunction: (id) => {
        //   return `<a href="quotes/view/${id}">${id}</a>`; 
        // }
      },
      date_of_arrival: {
        title: 'Date',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      },
      mobile: {
        title: 'Mobile',
        filter: true
      }
    }
  };

  constructor(private httpService: HttpService,
              private spinnerService: SpinnerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuoteDetails();
  }

  getQuoteDetails() {
    this.spinnerService.run();
    this.httpService.get(`contact/${this.route.snapshot.params.id}`).subscribe(
      res => {
        this.spinnerService.stop();
        this.quotes = res;
      }, err => this.spinnerService.stop()
    )
  }

}
