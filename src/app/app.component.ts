import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn_angular';
  message = 'Message from parent changed';

  @Input()
  child = '';

  onHandle() {
    console.log('typing');
  }
}
