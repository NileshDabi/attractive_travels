import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.scss']
})
export class CreateDestinationComponent implements OnInit {
  nights = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  userInfo: any;
  constructor(private storageService: StorageService) {}
     
  ngOnInit() {
    this.storageService.userDataSubscription.subscribe(user => {
      this.userInfo = user;
    });
  }

  logout() {
    this.storageService.logout();
  }
  
  ngOnDestroy(){
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.remove('navbar-transparent');
      // var body = document.getElementsByTagName('body')[0];
      // body.classList.remove('index-page');
  }

  ngAfterViewInit() {}

  keyword = 'name';
  data = [
      { id: 1, name: 'Ladakh' },
      { id: 2, name: 'Delhi'  },
      { id: 3, name: 'Himachal Pradesh' },
      { id: 4, name: 'Kerala' },
      { id: 5, name: 'Jammu and kasmir' },
      { id: 6, name: 'Goa' },
      { id: 7, name: 'Andaman' },
      { id: 8, name: 'Rajsthan' },
  ];


  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }

}
