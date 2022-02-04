import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-authentication',
  templateUrl: './otp-authentication.component.html',
  styleUrls: ['./otp-authentication.component.css']
})
export class OtpAuthenticationComponent implements OnInit {
  forCompanyApplication = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  goToCompanyDetails() {
    this.forCompanyApplication = true;
  }

  otpForm: FormGroup = this.formBuilder.group({
    code: [, { validators: [Validators.required], updateOn: "change" }],
  });
}
