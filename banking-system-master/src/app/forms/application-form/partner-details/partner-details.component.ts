import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {
  forBusinessApplication = false;
  checked = true;
  hideState = false;
  hideBankInfo = false;
  show2ndDirector = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  goToAboutBusiness() {
    this.forBusinessApplication = true;
  }

  checkValue(country) {
    if(country == "Singapore") {
      this.hideState = true;
    } else {
      this.hideState = false;
    }
  }

  checkName(name) {
    if(name == "None") {
      this.hideBankInfo = true;
    } else {
      this.hideBankInfo = false;
    }
  }

  toggle() {
    this.show2ndDirector = !this.show2ndDirector;
  }

  partnerForm: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required], updateOn: "change" }],
    nricNo: [, {validators: [Validators.required], updateOn: "change" }],
    email: [, {validators: [Validators.required, Validators.email], updateOn: "change",}],
    mobile: [, {validators: [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')], updateOn: "change",}],
    residentialAddress: [, { validators: [Validators.required], updateOn: "change" }],
    postalCode: [, { validators: [Validators.required], updateOn: "change" }],
    country: [, { validators: [Validators.required], updateOn: "change" }],
    hasOtherUltimateOwner: [, { validators: [Validators.required], updateOn: "change" }],
    applicationEmail: [, { validators: [Validators.required], updateOn: "change" }],
  });
}
