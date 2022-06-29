import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personality'
})
export class PersonalityPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Playfull':
        return 'sports_tennis';
      case 'Chill':
        return 'beach_access';
      default:
        return 'mood';
      }
  }

}
