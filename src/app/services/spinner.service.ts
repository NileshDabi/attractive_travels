import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  enabled = new Subject<boolean>();

  constructor() { }

  body:HTMLElement = document.getElementsByTagName('body')[0];
  public run(): void {
      this.enabled.next(true);
      this.body.classList.add('no-scroll');
  }

  public stop(): void {
    this.enabled.next(false);
    this.body.classList.remove('no-scroll');
  }
}
