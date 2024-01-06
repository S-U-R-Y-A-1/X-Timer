import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToApps(): void {
    this.router.navigate(['/apps-pg']);
  }
  navigateToWho(): void {
    this.router.navigate(['/who-are-you-pg']);
  }
  navigateToSeries(): void {
    this.router.navigate(['/series-and-anime-pg']);
  }
  navigateToBooks(): void {
    this.router.navigate(['/books-pg']);
  }
  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }


}
