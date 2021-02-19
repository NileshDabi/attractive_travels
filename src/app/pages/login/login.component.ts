import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

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
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return alert('please fill valid details');
    }
    this.httpService.post(this.loginForm.value, 'user/login/').subscribe(
      res => {
        if(res.message) {
          localStorage.setItem('authToken', res.token);
          alert('success');
        }
        console.log(res);
      }, err => {
        if(err.error.message) {
          alert(err.error.message);
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