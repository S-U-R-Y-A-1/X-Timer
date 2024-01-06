

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'db.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {

  number1: number = 3; // User-defined value
  number2: number = 5; // User-defined value
  number3: number = 1;
  number12: number = 1;
  Imagepath:string='';
  calculatedArray: number[] = [];
  outputArray: number[] = [];
  numInputs: number = 1;
  inputValues: string[] = ['']; // Initialize with an empty string
  name = 'Dynamic Add Fields';
  values: { value: string }[] = [];
  diff:number=1;
  sum:number=0;
  ngOnInit() {
    // Image location
    this.Imagepath = '/assets/Untitled design.jpg';
    
  }


  removevalue(i: number) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ value: "" });
  }
  createInputBlocks() {
    // Update the inputValues array based on the number provided
    this.inputValues = Array.from({ length: this.numInputs }, (_, i) => this.inputValues[i] || '');
  }

  getInputValues() {
    // Display the array in the console (you can modify as needed)
    console.log('Input Values:', this.inputValues);
  }
  // Initialize the calculatedArray based on the given calculation
  initializeCalculatedArray(): void {
    this.sum=0;
    this.number3=this.values.length;
    this.number2 = this.values.length;
    for (let i = 0; i < this.values.length; i++) {
      this.number3 = (this.number3) / 2;
      this.calculatedArray[i] = this.number3 * ((this.number1) / this.number2); 
      this.sum+=this.calculatedArray[i];
    }
    this.diff=this.number1-this.sum;
    for (let i = 0; i < this.values.length; i++) {
    }

  }

 
   
 
}
    

