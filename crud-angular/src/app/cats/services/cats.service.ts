import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Cat } from '../model/cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private readonly API = 'api/cats';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cat []>(this.API)
    .pipe(
      first(),
      delay(500),
      tap( cats => console.log(cats))
    );
  }

  save(record: Cat) {
    return this.httpClient.post<Cat>(this.API, record).pipe(first());
  }
}
