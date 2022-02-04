import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-signature',
  templateUrl: './upload-signature.component.html',
  styleUrls: ['./upload-signature.component.css']
})
export class UploadSignatureComponent implements OnInit {
  selectedFiles = null;
  isGt5mb = null;

  constructor() { }

  ngOnInit(): void {
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
