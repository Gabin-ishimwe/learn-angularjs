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

  isRed = true;

  imageUrl =
    'https://static1.squarespace.com/static/53b839afe4b07ea978436183/53bbeeb2e4b095b6a428a13e/5fd2570b51740e23cce97919/1678505081247/traditional-food-around-the-world-Travlinmad.jpg?format=1500w';

  @Output()
  messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Message emitted from child post component');
    return 'Hello from child method';
  }

  buttonClick() {
    console.log('Button click-----');
  }
}
