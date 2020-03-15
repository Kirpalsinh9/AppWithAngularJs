import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  Url: string = 'https://jsonplaceholder.typicode.com/posts'
  limit = '?_limit=5';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.Url}${this.limit}`);
  }

  getDelete(post: Post): Observable<Post> {
    const Url1 = `${this.Url}/${post.id}`;
    return this.http.delete<Post>(Url1, httpOptions);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.Url, post, httpOptions)
  }
}
