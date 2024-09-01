import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  faChevronLeft = faChevronLeft;

  faChevronRight = faChevronRight;

  imageSrcs = ['/slider.png', '/slider.png', '/slider.png', '/slider.png'];

  currentImage = 0;

  prevImage() {
    this.currentImage === 0
      ? (this.currentImage = this.imageSrcs.length - 1)
      : this.currentImage--;
  }

  nextImage() {
    this.currentImage === this.imageSrcs.length - 1
      ? (this.currentImage = 0)
      : this.currentImage++;
  }
}
