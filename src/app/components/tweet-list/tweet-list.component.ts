import { Component, OnInit } from "@angular/core";
import { Tweet } from "src/app/models/tweet.model";
import { TweetsService } from "src/app/tweets.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-tweet-list",
  templateUrl: "./tweet-list.component.html",
  styleUrls: ["./tweet-list.component.scss"]
})
export class TweetListComponent implements OnInit {
  private tweets: Tweet[];

  constructor(private tweetService: TweetsService) {
    this.tweets = [];
  }

  ngOnInit() {
    this.tweets = this.tweetService.getTweets(); 
   console.log("object: ", this.tweetService.getTweets()) 
    console.log("tweets: ", this.tweets)
  }

  toDelete(id: Number){
    this.tweetService.deleteTweet(id);
  }
}
