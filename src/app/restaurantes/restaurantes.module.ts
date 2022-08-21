import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteFormComponent } from './restaurante-form/restaurante-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestaurantesComponent,
    RestauranteFormComponent
  ],
  imports: [
    CommonModule,
    RestaurantesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RestaurantesModule { }
