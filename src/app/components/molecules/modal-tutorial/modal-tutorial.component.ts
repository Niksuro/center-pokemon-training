import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-tutorial',
  templateUrl: './modal-tutorial.component.html',
  styleUrls: ['./modal-tutorial.component.scss']
})
export class ModalTutorialComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalTutorialComponent>) { }

  ngOnInit(): void {
  }
/**
   * Close the actual modal
   */
closeModal() {
  this.dialogRef.close(true);
}
}
