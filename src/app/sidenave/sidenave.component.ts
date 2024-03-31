import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sideNave',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidenave.component.html',
  styleUrl: './sidenave.component.scss'
})
export class SidenaveComponent {

}
