import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-business',
  templateUrl: './about-business.component.html',
  styleUrls: ['./about-business.component.css']
})
export class AboutBusinessComponent implements OnInit {
  forTransactions = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  goToAboutTransactions() {
    this.forTransactions = true;
  }

  aboutBusinessForm: FormGroup = this.formBuilder.group({
    businessOperatesIn: [, { validators: [Validators.required], updateOn: "change" }],
    aboutBusiness: [, {validators: [Validators.required], updateOn: "change" }],
    businessCount: [, {validators: [Validators.required], updateOn: "change" }],
    businessActivities: [, {validators: [Validators.required], updateOn: "change" }],
  });
}
