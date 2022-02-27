import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Photos";
  image1 =
    "https://www.launchcode.org/assets/homepage/glasses-green-regular-5e09a997df6799538d2ae4e3875b3b3f17eafadea856f836b88eb2bf1137e708.png";
  image2 =
    "https://www.launchcode.org/assets/dabomb-562825789d0850a41ddd8ef7eb0d0222d9ef99cd54594ee5e820cb6070fb9477.svg";
  image3 =
    "https://www.launchcode.org/assets/homepage/handshake-skin-tones-680fbb6ffcc46cc400ef661eb92a66889d9a65ad488c6d4afc99a54b7bba7cee.png";

  constructor() {}

  ngOnInit() {}
}
