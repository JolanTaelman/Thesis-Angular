import { Component, OnInit } from "@angular/core";
import { TweetsService } from "src/app/tweets.service";
import { Tweet } from "src/app/models/tweet.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private textAreaValue: String;

  constructor(private tweetService: TweetsService) {}

  ngOnInit() {}

  addTweet(text: String) {
    var id = this.tweetService.getIndex();
    console.log("index: ", id);
    var newTweet = new Tweet(id, "Bob", text, new Date());
    this.tweetService.addTweet(newTweet);
  }

}
