import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteFormComponent } from './restaurante-form/restaurante-form.component';

const routes: Routes = [
  {  path: '', component: RestaurantesComponent},
  {  path: 'new', component: RestauranteFormComponent}
];

@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantesRoutingModule { }
