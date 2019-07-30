import { Pipe, PipeTransform } from '@angular/core';
import { Talk } from '../models/talk';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Talk[], search: string): any {
    if (!items || !search) {
      return items;
    }

    return items.filter(item => 
      item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      item.speaker.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

}
