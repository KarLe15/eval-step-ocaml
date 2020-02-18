import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceN'
})
export class ReplaceNPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if (value) {
      let newValue = value.replace(/\\n/g, "<br>").replace(/&/g, "&amp;");
      console.log(newValue);
      return `${newValue}`;
    }
  }

}
