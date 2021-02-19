import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm:FormGroup;
  data : Date = new Date();
  focus;
  focus1;
  constructor(private fb: FormBuilder,
              private httpService: HttpService) { }

  ngOnInit() {
    this.initiForm();
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }

  initiForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if(this.signupForm.invalid) {
      return alert('please fill valid details');
    }
    this.httpService.post(this.signupForm.value, 'user/signup/').subscribe(
      res => {
        if(res.message) {
          alert(res.message);
        }
        console.log(res)
      }, err => {
        if(err.message) {
          alert(err);
        }
        console.log(err);
      }
    )
  }
  
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}
