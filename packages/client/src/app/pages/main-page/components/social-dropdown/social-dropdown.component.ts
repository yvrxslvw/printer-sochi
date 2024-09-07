import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faTelegram,
  faVk,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-dropdown',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social-dropdown.component.html',
  styleUrl: './social-dropdown.component.scss',
})
export class SocialDropdownComponent {
  faChevronUp = faChevronUp;

  faWhatsapp = faWhatsapp;

  faInstagram = faInstagram;

  faTelegram = faTelegram;

  faVk = faVk;

  isShown = false;
}
