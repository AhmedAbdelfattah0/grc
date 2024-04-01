import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-standards',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.scss'
})
export class StandardsComponent {
  status1: string = ""
  status2: string = ""
  openToWork: boolean = false;
  constructor(public dialog: MatDialog) {}

  save() {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'})
  }
}
