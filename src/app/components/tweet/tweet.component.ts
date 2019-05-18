import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tweet } from "src/app/models/tweet.model";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"]
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  @Output() toDelete = new EventEmitter<Number>();

  public commentText: String;

  constructor() {}

  ngOnInit() {}

  onDelete(id: Number) {
    this.toDelete.emit(id);
  }

  postComment(text: String){
    this.tweet.addComment(text);
  }
}
