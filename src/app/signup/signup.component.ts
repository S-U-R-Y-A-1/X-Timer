import { Component } from "@angular/core";
import { SignupService } from "signup.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private router:Router,private signupService: SignupService) { }

  signup() {
    this.signupService.signup(this.username, this.password)
      .then((response: any) => {
        console.log('Signup successful', response);
        this.router.navigate(['\home-page']);
        // Redirect or perform any other actions after successful signup.
      })
      .catch((error:any) => {
        console.error('Signup error', error);
        // Handle signup error (display error message, etc.).
      });
  }

}
