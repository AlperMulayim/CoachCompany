import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './Post';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.page.html',
  styleUrls: ['./post-home.page.scss'],
})
export class PostHomePage implements OnInit {

  public postList : Post[] = [];
  public lastPost : Post;
  constructor(private postService: PostService) { }

  ngOnInit() {

  }


  ionViewWillEnter() {
    this.postList = this.postService.getAllPosts();
    this.lastPost = this.postList[this.postList.length -1];
  }

}
