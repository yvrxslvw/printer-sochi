import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTelegram,
  faVk,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faMapPin = faMapPin;

  faEnvelope = faEnvelope;

  faWhatsapp = faWhatsapp;

  faInstagram = faInstagram;

  faTelegram = faTelegram;

  faVk = faVk;
}
