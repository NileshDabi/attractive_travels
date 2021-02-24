import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  formSubmitting = false;

  data : Date = new Date();
  focus;
  focus1;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private storageService: StorageService,
              private router: Router) { }

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
    this.formSubmitting = true;
    this.httpService.post(this.loginForm.value, 'user/login/').subscribe(
      res => {
        if(res.message) {
          this.storageService.saveToSession('authToken',res.token);
          this.storageService.saveToSession('userInfo',res);
          this.router.navigate(['/']);
          alert('success');
        }
        this.formSubmitting = false;
        console.log(res);
      }, err => {
        this.formSubmitting = false;
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