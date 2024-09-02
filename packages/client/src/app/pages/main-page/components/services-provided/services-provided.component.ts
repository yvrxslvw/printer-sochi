import { Component } from '@angular/core';

import { ProvidedServiceComponent } from '../../../../components/provided-service/provided-service.component';

@Component({
  selector: 'app-services-provided',
  standalone: true,
  imports: [ProvidedServiceComponent],
  templateUrl: './services-provided.component.html',
  styleUrl: './services-provided.component.scss',
})
export class ServicesProvidedComponent {}
