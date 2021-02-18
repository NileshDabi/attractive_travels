import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-browse-holiday',
  templateUrl: './browse-holiday.component.html',
  styleUrls: ['./browse-holiday.component.css']
})
export class BrowseHolidayComponent implements OnInit {
  simpleSlider = 40;
  doubleSlider = [1, 5];
  state = true;
  sights: any[] = [];
  filters: any[] = [];
  duration: any[] = [];
  ratings: any[] = [];
  title: string;
  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.httpService.get(`domestic/${this.title}`).subscribe(res => {
      this.sights = res.sights;
      this.filters = res.filters;
      this.duration = res.sights.map((i) => {
        return i.duration;
      }).filter(this.onlyUnique);
      this.ratings = res.sights.map((i) => {
        return i.ratings;
      }).filter(this.onlyUnique);
    })
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  contactPage(item) {
    this.router.navigate(['/contact'], { queryParams:{item: JSON.stringify(item) }})    
  }

}
