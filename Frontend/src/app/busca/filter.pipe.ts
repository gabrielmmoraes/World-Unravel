import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items || !searchText || searchText.length === 0) return [];
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.nome.toLowerCase().includes(searchText);
    });
  }
}
