import { Pipe, PipeTransform } from '@angular/core';
/**
 * Pipe for transforming typescript enums for
 * consumation with ngFor-directive
 */
@Pipe({
  name: 'fgEnum'
})
export class FgEnumPipe implements PipeTransform {
  /**
   * Transform typescript enum-objects into an array that can
   * be iterated with ngFor-directive
   * @param value Typescript enum-object
   * @param args (optional) args are not used in this pipe
   */
  transform(value: any, args?: any): any {
    console.log(value);
    let keys = Object.keys(value);
    console.log(keys);
    keys = keys.slice(keys.length / 2);
    console.log(keys);
    return keys;
  }

}
