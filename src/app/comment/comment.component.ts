import {Component, OnInit} from '@angular/core';
import {CommentService} from '../shared/comment.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments = [
    {date: new Date(), message: 'Belle citation'},
    {date: new Date(), message: 'A oui ! c\'est ça'},
  ];
  comment = {date: null, message: ''};
  listComments : any;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    // this.resetForm();
    this.loadComments();
  }

  resetForm(form : NgForm) {
    if (form != null)
      form.resetForm();
    this.commentService.comment = {
      id: null,
      message: '',
      date: null
    };
  }

  loadComments(){
    this.commentService.getComments()
      .subscribe(data => {
      this.listComments = data;
    }, err => {
      console.log(err);
    })
  }


  /*onSubmit(f : NgForm){
    this.onAddComment(f);
  }*/

  onAddComment(c) {
    c.value.date= new Date();
    this.commentService.postComment(c.value).subscribe
    (resp =>{
      this.resetForm(c);
      this.loadComments();
    })
  }

  updateComment(c){
    this.commentService.putComments(c.value).subscribe
    (resp =>{
      this.loadComments();
    })
  }

  onDeleteComment(id : number){
    this.commentService.deleteComment(id).subscribe(
      resp =>{
        this.loadComments();
      }
    )
  }

  /*onAddCommentaire(c){
    console.log(c);
    c.date=new Date();
    this.comments.push(c);
    this.comment.message="";
    this.comment.date=null;
  }*/
}
