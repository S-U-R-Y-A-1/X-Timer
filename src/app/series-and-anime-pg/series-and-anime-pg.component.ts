import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series-and-anime-pg',
  templateUrl: './series-and-anime-pg.component.html',
  styleUrls: ['./series-and-anime-pg.component.css']
})
export class SeriesAndAnimePgComponent implements OnInit {

  ImagePath: string='';
  Image:string='';

  constructor(private router: Router) {}

  ngOnInit() {
    // Image location
    this.ImagePath = '/assets/a.jpg';
    this.Image='/assets/b.jpg';
  }

  navigateToApp(): void {
    this.router.navigate(['/series-main']);
  }

  navigateToani(): void {
    this.router.navigate(['/anime-main']);
  }
  navigateToAppa(): void {
    this.router.navigate(['/home-page']);
  }
  navigateToAppb(): void {
    this.router.navigate(['/login']);
  }
}
