import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private router: Router) {}
  @Input() name: string = 'teste';
  gotoRecords() {
    this.router.navigate(['/records']);
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }
}