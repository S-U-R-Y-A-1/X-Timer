import { Component } from '@angular/core';

@Component({
  selector: 'app-books-pg',
  templateUrl: './books-pg.component.html',
  styleUrls: ['./books-pg.component.css']
})
export class BooksPgComponent {
  series:string="";
  number1: number=0; // User-defined value
  number2: number = 0; // User-defined value
  output:number=0;
  initializeCalculatedArray(): void {
    this.output=0;
    this.output=Math.round((this.number1/this.number2));
  }

}
