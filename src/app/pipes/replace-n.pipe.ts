import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceN'
})
export class ReplaceNPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    return value.slice(start, end);
  }


}
