import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn_angular';
  message = 'Message from parent changed';

  dataBinding: string | undefined = 'init data';
  stepForm: string = '';

  names: string[] = ['gabin', 'ishimwe', 'alain', 'tuyi'];
  admin: string = 'Gabin Ishimwe';
  // names: string[] = [];
  // index: number | undefined;

  @Input()
  child = '';

  onHandle($event: any) {
    console.log($event.target.value);
  }

  getUserName(name: any) {
    console.log(name);
  }

  getDataBinded() {
    console.log(this.dataBinding);
  }
  onClick(step: string) {
    this.stepForm = step;
  }
}
