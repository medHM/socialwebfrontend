import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';

@Component({
  selector: 'app-news-feed-items-grid',
  templateUrl: './news-feed-items-grid.component.html',
  styleUrls: ['./news-feed-items-grid.component.css']
})
export class NewsFeedItemsGridComponent implements OnInit {
  /*posts=[
    {author: "AhmedEssid", date:new Date(), message:"La vie est un mystère qu'il faut vivre, et non un problème à résoudre."},
    {author: "AhmedFl", date:new Date(), message:"A oui ! c'est ça"},
  ];
  post={date:null,message:""};*/

  listPosts : any;
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(){
    this.postService.getPosts()
      .subscribe(data => {
        this.listPosts = data;
      }, err => {
        console.log(err);
      })
  }
}
