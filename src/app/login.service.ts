import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { ILogin, ILoginInfo } from './login/Ilogin';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {  
    
  }

  public loginUser(login: ILogin): Observable<ILoginInfo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + window.btoa('pickpro:Admin$11')
      })
    };
    // const url = 'https://localhost:44306/api/Login/LoginUser';
    return this.http.post<any>(`${environment.apiUrl}/Login/LoginUser`, login, httpOptions);
  }

  
  
}

