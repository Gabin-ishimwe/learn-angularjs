import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input()
  postTitle = '';

  childPost = 'Body from child';

  @Output()
  messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Message emitted from child post component');
    return 'Hello from child method';
  }
}
