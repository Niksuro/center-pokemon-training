import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from '@models/pokemon/pokemon.interface';

@Component({
  selector: 'app-modal-stats',
  templateUrl: './modal-stats.component.html',
  styleUrls: ['./modal-stats.component.scss']
})
export class ModalStatsComponent implements OnInit {

  public pokemonData!: Pokemon;

  constructor(public dialogRef: MatDialogRef<ModalStatsComponent>) { }

  ngOnInit(): void {
  }
  /**
   * Close the actual modal
   */
  closeModal() {
    this.dialogRef.close(true);
  }

}
