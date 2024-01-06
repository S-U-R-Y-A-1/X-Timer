import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-who-are-you-pg',
  templateUrl: './who-are-you-pg.component.html',
  styleUrls: ['./who-are-you-pg.component.css']
})
export class WhoAreYouPgComponent implements OnInit {
  textForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.textForm = this.fb.group({
      textParagraph: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.textForm && this.textForm.valid) {
      const textParagraphControl = this.textForm.get('textParagraph');
  
      if (textParagraphControl) {
        const textParagraphValue = textParagraphControl.value;
        console.log('Entered Text Paragraph:', textParagraphValue);
      }
    }
  }
  
      // You can perform additional actions here, such as sending the data to the server
    }
  