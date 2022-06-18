import { Pipe, PipeTransform } from '@angular/core';

const MIN = 60;
const DAY = 24;
const MILLISEC = 1000;
@Pipe({
  name: 'timeFormatter',
})
export class TimeFormatterPipe implements PipeTransform {
  transform(value: number): string {
    let minutes = Math.floor(value / MILLISEC / MIN);
    let hours = Math.floor(minutes / MIN);
    let days = Math.floor(hours / DAY);
    let template = '';

    if (days > 1) {
      template += `${days} days`;
    }

    if (hours > 1) {
      template += `${hours} hours`;
    }

    if (minutes > 1) {
      template += `${minutes} minutes`;
    }

    return template;
  }
}
