import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  configUrl = 'assets/config.json';
  userInfo: any;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  setHeaders(sendJWT = true) {
    let headers = new HttpHeaders();
    const token = this.storageService.getSessionStorage('authToken');
    if(token && sendJWT) {
      headers = headers.append('Authorization', 'Token ' + token);
    }
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