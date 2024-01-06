import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-main',
  templateUrl: './anime-main.component.html',
  styleUrls: ['./anime-main.component.css']
})
export class AnimeMainComponent {
  series:string="";
  number1: number=20; // User-defined value
  number2: number = 0; // User-defined value
  number3: number = 0;
  number4:number=0;
  output:number=0;
  initializeCalculatedArray(): void {
    this.output=0;
    this.output=Math.round((((this.number2*this.number3)/this.number4)*(this.number1)));
  }
  initializeCalculatedArraya(): void {
    this.output=0;
    this.output=Math.round((((this.number2*this.number3)/this.number4)*(this.number1)))+15;
  }
}
