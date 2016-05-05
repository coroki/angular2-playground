import {Component, OnInit} from 'angular2/core'
import {TweetComponent} from '../tweet/tweet.component'
import {TweetsService} from './tweets.service'
import {Tweet} from '../tweet/tweet'

@Component({
  selector: 'tweets',
  template: '<tweet *ngFor="#data of tweets" [data]="data" (vote-changed)="onVoteChanged(data.id)"></tweet>',
  directives: [TweetComponent],
  providers: [TweetsService]
})
export class TweetsComponent implements OnInit{

  tweets:Tweet[];

  constructor(private tweetsService:TweetsService){
  }

  ngOnInit() {
    this.tweetsService.getTweets()
      .then(tweets => this.tweets = tweets);
  }

  onVoteChanged(tweetId:number) {
    var tweet = this.tweets.filter(t => t.id == tweetId)[0];
    tweet.liked = !tweet.liked;
    tweet.voteCount += tweet.liked ? 1 : -1;
  }
}
