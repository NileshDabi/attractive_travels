import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/config.json';
  userInfo: any;

  constructor(private http: HttpClient) { }

  setHeaders(sendJWT = true) {
    let headers = new HttpHeaders();
    if(this.userInfo && sendJWT) {
      headers.append('Authorization', 'Token ' + this.userInfo.auth_token);
    }
    return headers;
  }

  setFormDataHeaders(sendJWT = true) {
    let headers = new HttpHeaders();
    if(this.userInfo && sendJWT) {
      headers.append('Authorization', 'Token ' + this.userInfo.auth_token);
    }
    headers.append('Content-Type', 'multipart/form-data')
    return headers;
  }

  get(endpoint, sendJWT = true) {
    return this.http.get<any>(`${environment.apiUrl}/${endpoint}`, {
      headers: this.setHeaders(sendJWT = true)
    })
  }

  post(data, endpoint,  sendJWT = true) {
    return this.http.post<any>(`${environment.apiUrl}/${endpoint}`, data , {
      headers: this.setHeaders(sendJWT = true)
    })
  }
}
