import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { ICareScouter } from '../models/interfaces/carescouter.interface';
import { CareScouterServices } from '../services/carescouter.service';

@Injectable({ providedIn: 'root' })
export class CareScouterResolver implements Resolve<ICareScouter[]> {
  constructor(private carescouterService: CareScouterServices) {}

  resolve(): Observable<ICareScouter[]> {
    return this.carescouterService.getCareScouters().pipe(take(1));
  }
}
