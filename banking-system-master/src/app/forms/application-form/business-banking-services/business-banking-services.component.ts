import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-banking-services',
  templateUrl: './business-banking-services.component.html',
  styleUrls: ['./business-banking-services.component.css']
})
export class BusinessBankingServicesComponent implements OnInit {
  forUploadingDocument = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToDocumentUpload() {
    this.forUploadingDocument = true;
  }
}
