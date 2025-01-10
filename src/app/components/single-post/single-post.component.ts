import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  postId = -1;
  postDetail: Post | null = null;

  constructor() {
    this.postId = Number(this.route.snapshot.params['postId']);
    this.postsService.getPostById(this.postId).then((post: Post) => {
      this.postDetail = post;
    });
  }
}
