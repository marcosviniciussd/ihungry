import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    RestaurantesComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRoutingModule,
    AppMaterialModule
  ]
})
export class RestaurantesModule { }
