import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private router: Router,private authService: AuthService) {}
  signup(){
    this.router.navigate(['/signup']);
  }
  
  login(username: string, password: string) {
    this.authService.login(username, password)
      .then((response: any) => {
        console.log('Login successful', response);
        this.router.navigate(['/home-page']);
        // Redirect or perform any other actions after successful login.
      })
      .catch((error: any)  => {
        console.error('Login error', error);
        // Handle login error (display error message, etc.).
      });
  }
  
  

  
}
