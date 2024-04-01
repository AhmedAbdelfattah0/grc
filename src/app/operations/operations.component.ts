import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 import { StandardsComponent } from '../standards/standards.component';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [StandardsComponent,CommonModule],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {
  tapType: 'ADDRESS'| 'STANDARDS' | 'REPORTS'= 'STANDARDS';
}
