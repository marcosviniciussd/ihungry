import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';


@NgModule({
  declarations: [
    RestaurantesComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RestaurantesModule { }
