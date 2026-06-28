import { Component, signal } from '@angular/core';
import { Master } from './components/master/master';

@Component({
  selector: 'app-root',
  imports: [Master],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
