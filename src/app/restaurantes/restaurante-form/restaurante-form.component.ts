import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RestaurantesService } from '../services/restaurantes.service';

@Component({
  selector: 'app-restaurante-form',
  templateUrl: './restaurante-form.component.html',
  styleUrls: ['./restaurante-form.component.scss']
})
export class RestauranteFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: RestaurantesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    //this.form = this.formBuilder.group({
    //name: [''],
    //category: ['']
    //}); 
  }

  ngOnInit(): void {
    console.log('onInit');
    //this.form.value.name = null;
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    //console.log('onCancel');
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Restaurante salvo com sucesso!', '', {duration: 3000});
    this.onCancel();
  }
  private onError() {
    this.snackBar.open('Erro ao salvar restaurante!', '', {duration: 3000});
  }

}
