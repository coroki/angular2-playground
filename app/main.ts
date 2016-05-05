import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import {LocalizationService} from './translations/localization.service';
import {TermKey} from './translations/termkey';

bootstrap(AppComponent, [LocalizationService, TermKey]);
