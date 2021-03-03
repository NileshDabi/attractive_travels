import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpService: HttpService) { }

  ngOnInit(): void {
    const data = JSON.parse(this.route.snapshot.queryParams.item);
    this.initForm();
    this.patchValue(data);
  }

  initForm() {
    this.contactForm = this.fb.group({
      destination: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      location: ['', [Validators.required]],
      date_of_arrival: ['', [Validators.required]],
      hotel_category: ['', [Validators.required]],
      number_of_nights_with_places: [''],
      passenger_name: [''],
      number_of_pax_with_age: [''],
      number_of_rooms: [''],
      number_of_extra_bed: [''],
      meal_plan: [''],
      sightseeing: [''],
      transfer_by: [''],
      travel_by: [''],
      remark: [''],
    })
  }

  get f() { return this.contactForm.controls; }

  patchValue(value) {
    this.f.location.patchValue(value.title);
    this.f.hotel_category.patchValue(value.ratings);
    this.f.number_of_nights_with_places.patchValue(value.sub_title);
    this.f.destination.patchValue(value.destination);
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return this.notify('Quote', 'Please fill all the details', 'danger');
    }
    this.httpService.post(this.contactForm.value, 'contact/add').subscribe(res => {
      this.notify(
        'Submitted Successfully',
        'Check Your Quote In My Quote',
        'success'
        ).then(result => {
        this.router.navigate(['/holiday']);
      });
    })
  }

  notify(title = '', message = '', code:any = 'warning') {
    return Swal.fire({
      icon: code,
      title: title,
      text: message
    });
  }

}
