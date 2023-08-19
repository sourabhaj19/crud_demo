import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(searchText) ||
      item.major.toLowerCase().includes(searchText) ||
      item.age.toString().includes(searchText) // Convert age to string before filtering

    );
  }
}
