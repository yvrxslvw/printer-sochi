import { Component } from '@angular/core';

import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
