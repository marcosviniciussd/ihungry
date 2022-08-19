import { Injectable } from '@angular/core';
import { Restaurante } from '../model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor() { }

  list(): Restaurante[] {
    return[
      {_id: "1", name: "Carne na Pedra", category: "Restaurante" },
      {_id: "2", name: "Pilão Mineiro", category: "Restaurante" },
      {_id: "1", name: "O Corvo e a Rosa", category: "Bar" }
    ];
  }
}
