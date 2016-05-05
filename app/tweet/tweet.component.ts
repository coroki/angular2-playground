import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Tweet} from './tweet'

@Component({
  selector: 'tweet',
  templateUrl: 'app/tweet/tweet.template.html',
  styleUrls: ['app/tweet/tweet.styles.css']
})
export class TweetComponent{

  @Input()
  data: Tweet;

  @Output('vote-changed')
  voteChanged = new EventEmitter();
}
