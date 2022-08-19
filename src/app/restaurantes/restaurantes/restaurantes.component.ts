import { Restaurante } from './../model/restaurante';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [];
  displayedColumns = ['name','category'];

  restaurantesService: RestaurantesService;
  constructor() {
    this.restaurantesService = new RestaurantesService();
    this.restaurantes = this.restaurantesService.list();
  }

  ngOnInit(): void {
  }

}
