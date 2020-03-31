import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceN'
})
export class ReplaceNPipe implements PipeTransform {

  transform(value: string): string {
    // console.log(value);
    if (value) {
      // const newValue = value.replace(/@env*]/g, ' ');
      const newValue = value;
      // console.log(newValue);
      return `${newValue}`;
    }
  }

}
