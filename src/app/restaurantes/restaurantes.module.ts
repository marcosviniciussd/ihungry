import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';


@NgModule({
  declarations: [
    RestaurantesComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRoutingModule
  ]
})
export class RestaurantesModule { }
