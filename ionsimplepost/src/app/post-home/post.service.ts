import { Injectable } from '@angular/core';
import { Post } from './Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postList: Post[];

  constructor() {
    this.postList = [
      {
        id: 48000,
        title: "Ancient 'Sacred Road' unearthed",
        date: "06.10.2019",
        description: "It is the most important sacred road that connects the political center Stratonikeia with religious center Lagina, Söğüt said, adding: In ancient times, priests from Lagina would participate in ceremonies with a girl carrying the key in front and a choir in the back, walking the Holy Road and passing through the Northern City Gate into Stratonikeia.",
        imgURL: "https://cdn.pixabay.com/photo/2017/09/02/19/48/oludeniz-2708347__340.jpg",
        author: "AlperMulayim"
      },
      {
        id: 48001,
        title: "5 million Turks expected to go on vacation in July and August",
        date: "06.10.2019",
        description: "Approximately five million Turks across the country are expected to go on holiday in July and August, with the June 23 mayoral elections ending and schools breaking up for the summer, tourism players have said.",
        imgURL: "https://cdn.pixabay.com/photo/2016/09/18/10/05/turkey-1677665__340.jpg",
        author: "AlperMulayim"
      }
    ];
  }

  public getAllPosts() : Post[]{
    return this.postList;
  }
}
