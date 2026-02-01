import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  showSecretOffer = false;

  toggleOffer() {
    this.showSecretOffer = true;
  }
}
