import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.css']
})
export class NewsFeedFormComponent implements OnInit {
  posts=[{}];
  post={date:null,message:""};
  listPosts : any;
  constructor(private postService : PostService,
              public  router:Router) { }

  ngOnInit() {
  }

  resetForm(form : NgForm) {
    if (form != null)
      form.resetForm();
    this.postService.post = {
      id: null,
      message: '',
      date: null
    };
  }

  loadPosts(){
    this.postService.getPosts()
      .subscribe(data => {
        this.listPosts = data;
      }, err => {
        console.log(err);
      })
  }

  onAddPost(c) {
    c.value.date= new Date();

    this.postService.postPost(c.value).subscribe
    (resp =>{
      this.resetForm(c);
      this.router.navigate(['/NewsFeed']);
    })
  }
}
