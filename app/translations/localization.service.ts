import {Injectable} from 'angular2/core'
import {Term} from './term'
import {TermKey} from './termkey';

@Injectable()
export class LocalizationService {

    terms: Term[] = TERMS;
    languageId: number = 1;

    constructor(private termkey:TermKey) {

    }

    loadLanguage(languageId:number) {
      this.termkey['LoggedInAs'] = 'LoggedInAs';
      this.termkey['Simple'] = 'Simple';
    }

    translate(termId: string, mappings:string[] = null) {
        var terms = this.terms.filter(term => term.id == termId);
        return terms.length > 0 ? terms[0].value : '';
    }
}

export var TERMS: Term[] = [
    { id: 'LoggedInAs', value: 'You are logged in as {0}' },
    { id: 'Simple', value: 'This has been translated' }
]
