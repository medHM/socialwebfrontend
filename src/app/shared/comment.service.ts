import { Injectable } from '@angular/core';
import { Comment } from './comment.model' ;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment : Comment;
  readonly rootURL ="http://localhost:8080/"

  constructor(private http : HttpClient) { }

  getComments(){
    return this.http.get(this.rootURL+'commentaires');
    // .toPromise().then(res => this.list = res as Comment[]);
    // .pipe(map(resp => resp))
  }

  postComment(comment : Comment){
    return this.http.post(this.rootURL+'commentaires',comment);
  }

  putComments(comment : Comment) {
    return this.http.put(this.rootURL + 'commentaires/',comment.id);
  }

  deleteComment(id : number){
    return this.http.delete(this.rootURL+'commentaires/'+id);
  }
}
