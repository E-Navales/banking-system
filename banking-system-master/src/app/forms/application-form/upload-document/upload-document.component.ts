import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  forUploadingNRIC = false;
  selectedFiles = null;
  isGt5mb = null;

  constructor() { }

  ngOnInit(): void {
  }

  goToNRICUpload() {
    this.forUploadingNRIC = true;
  }

  selectFile(event) {
    if (event.target.files[0].size < 5000000) {
      /* checking size here - 5MB */
      this.selectedFiles = event.target.files;
    } else {
      this.isGt5mb = true;
      this.selectedFiles = null;
    }
  }
}
