import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private httpService: HttpService) { }

  ngOnInit(): void {
    const data = JSON.parse(this.route.snapshot.queryParams.item);
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required]],
      location: ['', [Validators.required]],
      date_of_arrival: ['', [Validators.required]],
      hotel_category: ['', [Validators.required]],
      number_of_nights_with_places: ['', [Validators.required]],
      passenger_name: ['', [Validators.required]],
      number_of_pax_with_age: ['', [Validators.required]],
      number_of_rooms: ['', [Validators.required]],
      number_of_extra_bed: ['', [Validators.required]],
      meal_plan: ['', [Validators.required]],
      sightseeing: ['', [Validators.required]],
      transfer_by: ['', [Validators.required]],
      travel_by: ['', [Validators.required]],
      remark: ['', [Validators.required]],
    })
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    if (this.contactForm.invalid) {
      return alert('please fill all details')
    }
    this.httpService.post(this.contactForm.value, 'contact/add').subscribe(res => {
      alert('submitted');
    })
  }

}
