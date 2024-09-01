import { Component } from '@angular/core';

import { SliderComponent } from './components/slider/slider.component';
import { ServicesProvidedComponent } from './components/services-provided/services-provided.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SliderComponent, ServicesProvidedComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
