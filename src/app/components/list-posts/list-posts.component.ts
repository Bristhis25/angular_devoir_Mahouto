import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss',
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    });
    // this.postList = this.postsService.getPosts();
  }

  searchText: string = '';
filteredPosts: Post[] = [];
searchPosts(): void {
  this.filteredPosts = this.postList.filter((post: Post) => {
    return post.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
    }
}
