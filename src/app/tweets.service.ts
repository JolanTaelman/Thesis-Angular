import { Injectable } from "@angular/core";
import { Tweet } from "./models/tweet.model";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  private tweets: Tweet[];

  constructor() {
    this.tweets = this.initTweets();
  }

  initTweets() {
    var date = new Date("2019-05-08T20:59:34.076Z");
    return [
      new Tweet(1, "Fred", "Tweet 1", date),
      new Tweet(2, "mark", "Tweet 2", date),
      new Tweet(3, "ted", "Tweet 3", date)
    ];
  }

  getTweets() {
    return this.tweets;
  }

  addTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }
  
  getIndex(){
    return this.tweets.length + 1
  }

  deleteTweet(id: Number) {
    for (let index = 0; index < this.tweets.length; index++) {
      const element = this.tweets[index];
      if (element.getID() == id) {
        this.tweets.splice(index, 1);
      }
    }
  }
}
