import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICareScouter } from '../models/interfaces/carescouter.interface';

@Injectable({ providedIn: 'root' })

export class CareScouterServices {
  private rootUrl: string = 'https://localhost:44382/';
  constructor(private http: HttpClient){
    
  }
  getCareScouters(): Observable<ICareScouter[]>{
      return this.http.get<ICareScouter[]>(this.rootUrl) /*Kad budemo imali backend!*/
  } 
  /*
  addCardHolder(newCardholder): Observable<Cardholder> {
    return this.http.post<Cardholder>(
      this.rootUrl + 'cardholder',
      newCardholder
    );
  }*/
}
