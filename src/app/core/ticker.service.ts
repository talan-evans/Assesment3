import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Ticker } from './ticker.model';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  private regex = /SYMBOL/gi;

  constructor(private httpClient: HttpClient) { }

  lookupSymbol(symbol: string): Observable<Ticker> {
    return this.httpClient.get<Ticker>(environment.API_URL.replace(this.regex, symbol));
  }
}
