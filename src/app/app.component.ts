import { Component, VERSION } from '@angular/core';
import { DATA } from '../data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = DATA;
}
