import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  };
  getPostById = async (postId: Number): Promise<Post> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + postId
    );
    return (await response.json()) ?? null;
  };

  submitApplication(
    postId: number,
    postTitle: string,
    postBody: string,
    postUserId: number
  ) {
    console.log(
      `Posts application received: id: ${postId}, title: ${postTitle}, body: ${postBody}, userId: ${postUserId}`
    );
  }
}
