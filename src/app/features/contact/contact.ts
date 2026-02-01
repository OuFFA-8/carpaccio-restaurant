import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  isSent = false;

  sendMessage() {
    this.isSent = true;
    setTimeout(() => (this.isSent = false), 5000);
  }
}
