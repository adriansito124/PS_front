import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Records } from './pages/records/records';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Records], //Home Records
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProcessoSeletivo');
}
