import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() addPost: EventEmitter<any> = new EventEmitter();
  title: string;
  body: string
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const post = {
      title: this.title,
      body: this.body
    }
    this.addPost.emit(post);
    this.title = '',
      this.body = ''
  }
}
