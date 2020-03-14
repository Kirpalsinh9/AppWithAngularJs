import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post[];
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  OnDelete(post) {
    this.deletePost.emit(post);
  }
}
