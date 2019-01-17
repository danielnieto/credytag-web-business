import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'centsToUnits'
})
export class CentsToUnitsPipe implements PipeTransform {
    transform(value: number): number {
        return value / 100;
    }
}
