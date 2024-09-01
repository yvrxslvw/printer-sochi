import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faDiceFive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faChevronDown = faChevronDown;

  faDiceFive = faDiceFive;

  isDropdownShown = false;

  @HostListener('document:click')
  documentClick() {
    if (this.isDropdownShown) this.isDropdownShown = false;
  }
}
