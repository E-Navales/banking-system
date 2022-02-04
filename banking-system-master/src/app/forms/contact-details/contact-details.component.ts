import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  isContactSubmitted = false;
  forAppointment = true;

  ngOnInit(): void {
  }

  submitContact() {
    this.isContactSubmitted = true;
  }

  back() {
    this.forAppointment = true;
  }
}
