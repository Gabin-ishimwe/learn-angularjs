import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavBarComponent implements AfterViewInit, OnInit {
  title: string = 'Title from nav parent component';
  body: string = 'Here goes the body';
  childMsg!: string;

  @ViewChild(PostComponent)
  childComponent: any;

  childOutput!: string;

  @Input()
  message: string = '';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // make it async to wait for viewChield to be available
    // we can also use setTimeout(() =>{}, 0)
    Promise.resolve().then(() => {
      this.childMsg = this.childComponent.childPost;
    });
  }

  recieveEvent($event: any) {
    console.log('event from child', $event);
    this.childOutput = $event;
  }
}
 