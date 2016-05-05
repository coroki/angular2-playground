import {Component} from 'angular2/core'
import {TranslatePipe} from './translate.pipe'
import {TermKey} from './termkey';

@Component({
  selector: 'translations',
  template: `
    <h2>Translations</h2>
    <span>{{ termkey.LoggedInAs | translate }}</span>
    <br/>
    <span>{{ termkey.Simple | translate:'Colin Kirk' }}</span>
  `,
  pipes: [TranslatePipe]
})
export class TranslationsComponent {
  constructor(private termkey:TermKey){

  }
}
