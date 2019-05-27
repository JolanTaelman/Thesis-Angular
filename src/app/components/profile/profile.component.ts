import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public images = [
    {
      id: 0,
      pictureUrl: "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png",
    }
  ];

  addPicture() {
    let newpictures = this.images;
    let length = newpictures.length
    newpictures.push({
      id: length,
      pictureUrl:
        "https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png"
    });
  }

  constructor() {}

  ngOnInit() {}
}
