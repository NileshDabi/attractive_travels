import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.httpService.get('contact/').subscribe(res => {
      this.quotes = res;
    })
  }

}
