import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-series-main',
  templateUrl: './series-main.component.html',
  styleUrls: ['./series-main.component.css']
})
export class SeriesMainComponent implements OnInit { 
  ImagePath: string; 
  series:string="";
  number1: number=0; // User-defined value
  number2: number = 0; // User-defined value
  number3: number = 0;
  number4:number=0;
  output:number=0;
  constructor() { 
    //image location 
    this.ImagePath = '/assets/a.jpg'
  } 
  
  ngOnInit() { 
  } 
  initializeCalculatedArray(): void {
    this.output=0;
    this.output=Math.round((((this.number2*this.number3)/this.number4)*(this.number1)));
  }

}
