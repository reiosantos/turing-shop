import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCamelCase'
})
export class ToCamelCasePipe implements PipeTransform {

  private replace = (value: string) => {
    let ct = value.charAt(0).toLowerCase();
    const val = value.substr(1);
    ct = ct + val.replace(
      /([-_][a-zA-Z0-9])/g,
      group => group.toUpperCase().replace('-', '').replace('_', ''));
    return ct;
  };

  private transformObject = (value) => {
    const keys = Object.keys(value);
    keys.forEach((oldKey) => {
      const newKey = this.replace(oldKey);

      if (Array.isArray(value[oldKey])) {
        value[newKey] = this.transformArray(value[oldKey]);
      } else if (typeof value[oldKey] === 'object') {
        value[newKey] = this.transformObject(value[oldKey]);
      } else {
        value[newKey] = value[oldKey];
      }

      if (newKey !== oldKey) delete value[oldKey];
    });
    return value;
  };

  private transformArray = (value: object[]) => {
    return value.map(this.transformObject);
  };

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return value;
    }
    if (Array.isArray(value)) {
      return this.transformArray(value);
    }
    if (typeof (value) === 'object') {
      return this.transformObject(value);
    }
    return this.replace(value);
  }
}
