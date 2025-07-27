import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';

@Component({
  selector: 'app-home',
  imports: [Header, Station],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  name: string = "adrianp"
}
