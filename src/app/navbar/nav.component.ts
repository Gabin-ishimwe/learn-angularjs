import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavBarComponent {
  title: string = 'gabin';
  body: string = 'Here goes the body';

  @Input()
  message: string = '';
}
