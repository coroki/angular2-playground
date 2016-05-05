import {Injectable} from 'angular2/core'
import {Tweet} from '../tweet/tweet'

@Injectable()
export class TweetsService {
    getTweets() {
        return Promise.resolve(TWEETS);
    }
    getTweetsAync() {
        return new Promise<Tweet[]>(resolve => {
            setTimeout(() => resolve(TWEETS), 2000) // 2 seconds
        });
    }
}

export var TWEETS: Tweet[] = [
    {
        id: 0,
        author: 'SolarWinds',
        handle: 'SWCompany',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi magna, volutpat in magna quis, consectetur ultricies mi. Etiam egestas mauris nec aliquam ornare.',
        imgUrl: 'http://lorempixel.com/100/100/people?1',
        voteCount: 10,
        liked: true
    },
    {
        id: 1,
        author: 'Scotty McScott',
        handle: 'ScottyBoy12',
        text: 'Ut quam lorem, placerat ac feugiat vitae, porta vel massa. Fusce consectetur ex ac rhoncus varius. Nulla nec nunc in metus fermentum commodo.',
        imgUrl: 'http://lorempixel.com/100/100/people?2',
        voteCount: 3,
        liked: false
    },
    {
        id: 2,
        author: 'Rocky Balboa',
        handle: 'Champ1on',
        text: 'Aenean hendrerit fermentum gravida. In aliquet odio augue.',
        imgUrl: 'http://lorempixel.com/100/100/people?3',
        voteCount: 344,
        liked: true
    }
];
