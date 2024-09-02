import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-provided-service',
  standalone: true,
  imports: [],
  templateUrl: './provided-service.component.html',
  styleUrl: './provided-service.component.scss',
})
export class ProvidedServiceComponent {
  @Input() imageSrc: string;

  @Input() title: string;

  @Input() sizes: string[];
}
