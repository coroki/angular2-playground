import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote/vote.template.html',
    styleUrls: ['app/vote/vote.styles.css']
})
export class VoteComponent {

    @Input('vote-count')
    voteCount = 0;

    @Input('vote-value')
    voteValue = 0;

    @Output('vote-changed')
    voteChanged = new EventEmitter();

    constructor() {
    }
}
