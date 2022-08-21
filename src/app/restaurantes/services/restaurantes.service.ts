import { first, delay, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private readonly API = 'api/restaurantes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Restaurante[]>(this.API)
    .pipe(first(),
    delay(1000),
    tap(restaurantes => console.log(restaurantes)));
    //return this.httpClient.get<Restaurante[]>(this.API);
  }
}
