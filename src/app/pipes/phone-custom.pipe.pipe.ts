import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneCustomPipe',
  standalone: true
})
export class PhoneCustomPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 12) {
      return value;
    }

    const countryCode: string ='375'
    const operatorCode: string = value.substring(3, 5);
    const partOne: string = value.substring(5, 8);
    const partTwo: string = value.substring(8, 10);
    const partThree: string = value.substring(10, 12);

    return `+${countryCode} (${operatorCode}) ${partOne}-${partTwo}-${partThree}`;
  }

}
