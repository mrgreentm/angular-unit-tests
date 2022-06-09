import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investiments } from '../interfaces/investiments.interface';

@Injectable({
  providedIn: 'root',
})
export class ListInvestimentsService {
  private url =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Investiments[]> {
    return this.httpClient.get(this.url) as Observable<Investiments[]>;
  }
}
