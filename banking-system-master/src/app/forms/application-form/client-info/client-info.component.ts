import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  forAuthentication = false;
  forApplication = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  goToOTPAuthentication() {
    this.forAuthentication = true;
  }

  back() {
    this.forApplication = false;
  }

  clientForm: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required], updateOn: "change" }],
    mobile: [, {validators: [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')], updateOn: "change" }],
    email: [,{validators: [Validators.required, Validators.email], updateOn: "change",}],
  });
}
