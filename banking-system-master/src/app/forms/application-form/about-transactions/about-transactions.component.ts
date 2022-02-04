import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-transactions',
  templateUrl: './about-transactions.component.html',
  styleUrls: ['./about-transactions.component.css']
})
export class AboutTransactionsComponent implements OnInit {
  forBusinessBankingServices = false;
  hideOthers = false;
  hideCrimes = false;
  disableSuppliers = false;
  disableCustomers = false;
  supplierCount = 1;
  customerCount = 1;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.supplierCount = 1;
    this.customerCount = 1;
  }

  suppliers(n: number): Array<number> {
    return Array(n);
  }

  customers(n: number): Array<number> {
    return Array(n);
  }

  addSupplier() {
    this.supplierCount < 5 ? this.supplierCount++ : this.supplierCount;
  }

  removeSupplier() {
    this.supplierCount < 5 ? this.supplierCount-- : this.supplierCount;
  }

  addCustomer() {
    this.customerCount < 5 ? this.customerCount++ : this.customerCount;
  }

  removeCustomer() {
    this.customerCount < 5 ? this.customerCount-- : this.customerCount;
  }

  goToforBusinessBankingServices() {
    this.forBusinessBankingServices = true;
  }

  checkIfOthers(purpose) {
    if(purpose == "Others") {
      this.hideOthers = true;
    } else {
      this.hideOthers = false;
    }
  }

  checkSuppliers() {
    this.disableSuppliers = !this.disableSuppliers;
  }

  checkCustomers() {
    this.disableCustomers = !this.disableCustomers;
  }

  checkCountry(country) {
    if(country=="Russia" || country=="Ukraine") {
      this.hideCrimes = true;
    } else {
      this.hideCrimes = false;
    }
  }

  aboutTransactionsForm: FormGroup = this.formBuilder.group({
    purpose: [, { validators: [Validators.required], updateOn: "change" }],
    //funding: [, { validators: [Validators.required], updateOn: "change" }],
    salesOrigin: [, { validators: [Validators.required], updateOn: "change" }],
    totalExpectedTransaction: [, { validators: [Validators.required], updateOn: "change" }],
    expectedTransactionAmount: [, { validators: [Validators.required], updateOn: "change" }],
    currentSupplierName: [, { validators: [Validators.required], updateOn: "change" }],
    currentSupplierCountry: [, { validators: [Validators.required], updateOn: "change" }],
    expectedCustomerName: [, { validators: [Validators.required], updateOn: "change" }],
    expectedCustomerCountry: [, { validators: [Validators.required], updateOn: "change" }],
    //taxes: [, { validators: [Validators.required], updateOn: "change" }],
    servicesIncome: [, { validators: [Validators.required], updateOn: "change" }],
  });
}
