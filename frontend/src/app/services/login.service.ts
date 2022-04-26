import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../models/login-credentials.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private rootUrl: string = 'http://localhost:8080/api/login';
  constructor(private http: HttpClient) {}
  login(loginCredentials: LoginCredentials): Observable<boolean> {
    return this.http.post<boolean>(this.rootUrl, loginCredentials);
  }

  getAllCredentials(): Observable<LoginCredentials[]> {
    return this.http.get<LoginCredentials[]>(this.rootUrl + '/all-credentials');
  }
}
