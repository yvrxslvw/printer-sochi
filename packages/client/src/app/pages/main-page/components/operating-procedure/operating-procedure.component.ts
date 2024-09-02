import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operating-procedure',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './operating-procedure.component.html',
  styleUrl: './operating-procedure.component.scss',
})
export class OperatingProcedureComponent {
  faArrowDown = faArrowDown;
}
