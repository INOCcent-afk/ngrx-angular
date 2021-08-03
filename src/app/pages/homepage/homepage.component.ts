import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.type';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  loading: boolean = false;
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  log() {
    this.loading = true;
    this.postsService
      .getPosts()
      .subscribe((posts) => ((this.posts = posts), (this.loading = false)));
  }
}
