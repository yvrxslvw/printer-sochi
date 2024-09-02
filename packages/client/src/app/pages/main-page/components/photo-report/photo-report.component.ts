import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-report',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './photo-report.component.html',
  styleUrl: './photo-report.component.scss',
})
export class PhotoReportComponent {
  faArrowLeft = faArrowLeft;

  faArrowRight = faArrowRight;

  currentImage = 0;

  prevImage() {
    this.currentImage === 0 ? (this.currentImage = 2) : this.currentImage--;
  }

  nextImage() {
    this.currentImage === 2 ? (this.currentImage = 0) : this.currentImage++;
  }
}
