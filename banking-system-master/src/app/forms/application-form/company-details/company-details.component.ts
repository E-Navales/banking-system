import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  forPartnerApplication = false;
  showMailingAddress : boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  goToPartnerApplication() {
    this.forPartnerApplication = true;
  }

  toggle() {
    this.showMailingAddress = !this.showMailingAddress;
  }

  companyForm: FormGroup = this.formBuilder.group({
    businessName: [, { validators: [Validators.required], updateOn: "change" }],
    registrationNo: [, {validators: [Validators.required], updateOn: "change" }],
    businessEmail: [,{validators: [Validators.required, Validators.email], updateOn: "change",}],
    constitution: [, {validators: [Validators.required], updateOn: "change" }],
    businessAddress: [, {validators: [Validators.required], updateOn: "change" }],
    businessPostalCode: [, {validators: [Validators.required], updateOn: "change" }],
    businessState: [, { validators: [Validators.required], updateOn: "change" }],
    businessCountry: [, { validators: [Validators.required], updateOn: "change" }],
    businessPremise: [, { validators: [Validators.required], updateOn: "change" }],
  });
}
