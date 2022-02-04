import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  forAppointment = false;
  forApplication = false;

  constructor() {}

  ngOnInit(): void {
  }

  goToAppointment() {
    this.forAppointment = true;
  }
}
