import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { SpinnerService } from '../../services/spinner.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any[] = [];
  userInfo: any = {}

  settings = {
    actions:false,
    columns: {
      // id: {
      //   title: 'ID',
      // },
      destination: {
        title: 'Destinations',
        type: 'html',
        filter: false,
        valuePrepareFunction: (id) => {
          if(this.userInfo.role === 'owner') {
            return `<a href="quotes/view/${id}">${id.toUpperCase()}</a>`; 
          } else {
            return id.toUpperCase(); 
          }
        }
      },
      location: {
        title: 'Location',
        type: 'html',
        filter: false,
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
              private spinnerService: SpinnerService,
              private storageService: StorageService) {
                this.userInfo = storageService.getSessionStorage('userInfo');
               }

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
