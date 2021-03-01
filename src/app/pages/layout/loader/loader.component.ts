import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../services/spinner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  subscription: Subscription;
  enabled = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.subscription = this.spinnerService.enabled.subscribe(res => {
      this.enabled = res;
    });
  }

}
