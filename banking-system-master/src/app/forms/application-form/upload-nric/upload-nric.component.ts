import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-nric',
  templateUrl: './upload-nric.component.html',
  styleUrls: ['./upload-nric.component.css']
})
export class UploadNricComponent implements OnInit {
  forUploadingSignature = false;
  selectedFilesFront = null;
  selectedFilesBack = null;
  isFrontGt5mb = null;
  isBackGt5mb = null;

  constructor() { }

  ngOnInit(): void {
  }

  goToSignatureUpload() {
    this.forUploadingSignature = true;
  }

  selectFileFront(event) {
    if (event.target.files[0].size < 5000000) {
      /* checking size here - 5MB */
      this.selectedFilesFront = event.target.files;
    } else {
      this.isFrontGt5mb = true;
      this.selectedFilesFront = null;
    }
  }

  selectFileBack(event) {
    if (event.target.files[0].size < 5000000) {
      /* checking size here - 5MB */
      this.selectedFilesBack = event.target.files;
    } else {
      this.isBackGt5mb = true;
      this.selectedFilesBack = null;
    }
  }
}
