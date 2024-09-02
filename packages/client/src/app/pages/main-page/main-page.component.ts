import { Component } from '@angular/core';

import { SliderComponent } from './components/slider/slider.component';
import { ServicesProvidedComponent } from './components/services-provided/services-provided.component';
import { OperatingProcedureComponent } from './components/operating-procedure/operating-procedure.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SliderComponent,
    ServicesProvidedComponent,
    OperatingProcedureComponent,
    AdvantagesComponent,
    AboutComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
