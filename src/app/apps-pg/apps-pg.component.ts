import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps-pg',
  templateUrl: './apps-pg.component.html',
  styleUrls: ['./apps-pg.component.css']
})
export class AppsPgComponent {
    constructor(private router: Router) {}
  
    navigateToApp(): void {
      this.router.navigate(['/app-main']);
    }
    navigateToAppa(): void {
      this.router.navigate(['/home-page']);
    }
    navigateToAppb(): void {
      this.router.navigate(['/login']);
    }

}
