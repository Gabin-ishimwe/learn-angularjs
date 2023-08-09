import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interface/post';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input()
  postTitle = '';

  childPost = 'Body from child';

  isRed = false;

  imageUrl =
    'https://static1.squarespace.com/static/53b839afe4b07ea978436183/53bbeeb2e4b095b6a428a13e/5fd2570b51740e23cce97919/1678505081247/traditional-food-around-the-world-Travlinmad.jpg?format=1500w';

  @Output()
  messageEvent = new EventEmitter<string>();

  posts: any = [];

  form:any

  constructor(private postService:PostService) { // dependency injection
    // let postService = new PostService();
    this.posts = postService.postList;
    this.form = new FormGroup({
      name: new FormControl("",[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  
  public get name() {
    return this.form.get("name")
  }
  

  sendMessage() {
    this.messageEvent.emit(this.childPost);
    return 'Hello from child method';
  }

  buttonClick() {
    console.log('Button click-----');
  }

  addPost() {
    const newPost:Post = {
      id: 10,
      title: "post 10"
    }

    this.posts.push(newPost)
  }

  submitForm(f:NgForm) {
    console.log("FormModule ==> ", f)
  }

  getValue(val:NgModel) {
    console.log(val)
  }
}
