import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Restaurante': return 'restaurant';
      case 'Bar': return 'sports_bar';
      case 'Lanche': return 'lunch_dining';
      case 'Pizza': return 'local_pizza';
      case 'Café': return 'coffee_maker';
    }
    return 'nightlife';
  }

}
