import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post : Post;
  readonly rootURL ="http://localhost:8080/"

  constructor(private http : HttpClient) { }

  getPosts(){
    return this.http.get(this.rootURL+'posts');

  }
  postPost(post : Post){
    return this.http.post(this.rootURL+'posts',post);
  }
}
