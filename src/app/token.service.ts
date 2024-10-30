import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient){}
  sendTokenRequest(userName:string, password:string,roles:string):Observable<any> {
    let jsonRequestBody:any={userName:userName,password:password,roles:roles};
    // let jsonRequestBody:any={userName:'Prasanna',password:'1234',roles:'ADMIN'}
    let url='http://localhost:8098/authenticate';
    return this.http.post(url,jsonRequestBody,{responseType: 'text' as 'json'});
  }

  sendAuthRequest(token:string):Observable<any> {
    const headers = new HttpHeaders().set('Authorization', "Bearer " +token);
    let url='http://localhost:8098/api1';
    return this.http.post(url,headers,{responseType: 'text' as 'json'});
}
}
