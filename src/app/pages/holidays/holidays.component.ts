import { Component, OnInit, OnDestroy } from '@angular/core';
import { getData } from 'ajv/dist/compile/context';
import * as Rellax from 'rellax';
import { HttpService } from '../../services/http.service';
import { SpinnerService } from '../..//services/spinner.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit, OnDestroy {
  data : Date = new Date();
  focus;
  focus1;
  holidays: any[] = [];
  backgroundImg: string;

  constructor(private httpService: HttpService,
              private spinnerService: SpinnerService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.getData();
  }

  getData() {
    this.spinnerService.run();
    this.httpService.get('holidays').subscribe(res => {
      this.backgroundImg = res.back_img_url;
      this.holidays = res;
      this.spinnerService.stop();
    }, err => this.spinnerService.stop());
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
