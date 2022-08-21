import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { RestaurantesService } from '../services/restaurantes.service';
import { Restaurante } from './../model/restaurante';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {

  restaurantes$: Observable<Restaurante[]>;
  displayedColumns = ['name','category', 'actions'];

  //restaurantesService: RestaurantesService;

  constructor(
    private restaurantesService: RestaurantesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.restaurantes$ = this.restaurantesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar restaurantes.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    console.log('ngInit')
  }


  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
