import {Component} from 'angular2/core';
import {SelectableBoxComponent} from '../selectable-box/selectable-box.component';
import {VoteComponent} from '../vote/vote.component';
import {TweetsComponent} from '../tweets/tweets.component';
import {TranslationsComponent} from '../translations/translations.component';
import {LocalizationService} from '../translations/localization.service';
import {SignupComponent} from '../signup/signup.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app/app.template.html',
    styles: [`
      div {
        width: 100%;
        border-bottom: 1px solid #999;
        padding: 20px;
        float: left;
      }
      `],
    directives: [SelectableBoxComponent, VoteComponent, TweetsComponent, TranslationsComponent, SignupComponent]
})
export class AppComponent {

    constructor(private localization:LocalizationService) {
      localization.loadLanguage(1);
    }

    // SelectableBoxComponent
    box = {
        selected: true,
        count: 5
    }

    onBoxSelectionChanged() {
        this.box.selected = !this.box.selected;
        this.box.count += this.box.selected ? 1 : -1;
    }

    // VoteComponent
    vote = {
        count: 9,
        value: -1
    }

    onVoteChanged(newValue: number) {
        if (newValue != this.vote.value) {
            this.vote.value = newValue;
            this.vote.count += newValue;
        }
    }

    //TranslationsComponent

}
