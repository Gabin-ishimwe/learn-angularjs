import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavBarComponent implements AfterViewInit {
  title: string = 'Title from nav parent component';
  body: string = 'Here goes the body';
  childMsg!: string;
  @ViewChild(PostComponent)
  childComponent: any;

  childOutput!: string;

  @Input()
  message: string = '';

  ngAfterViewInit(): void {
    this.childMsg = this.childComponent.childPost;
  }

  recieveEvent($event: any) {
    console.log('event from child', $event);
    this.childOutput = $event;
  }
}
