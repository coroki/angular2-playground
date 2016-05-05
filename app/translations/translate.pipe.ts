import {Pipe, PipeTransform} from 'angular2/core'
import {LocalizationService} from './localization.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {

    constructor(private localizationService:LocalizationService) {

    }

    transform(value: string, args: string[]) {
        console.log('TranslatePipe: ' + value);
        if (value) {
          return this.localizationService.translate(value, args);
        }
    }
}
