import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * Label first pokemon selected for battle
   */
  @Input() firstPokemon: string;
  /**
   * Label second pokemon selected for battle
   */
  @Input() secondPokemon: string;
  /**
   * Check if two pokemon were selected to battle
   */
  @Input() selectedForBattle: boolean;
  /**
   * Emitter for battleModeButton
   */
  @Output() selectBattleMode = new EventEmitter();
  /**
   * Emitter for startBattleButton
   */
  @Output() selectStartBattle = new EventEmitter();

  constructor() {
    this.firstPokemon = '---';
    this.secondPokemon = '---';
    this.selectedForBattle = false;
  }
  ngOnInit(): void {}

  /**
   * Function that emit when battleMode button is pressed
   */
  handleSelectBattleMode() {
    this.selectBattleMode.emit();
  }
  /**
   * Function that emit when startBattle button is pressed
   */
  handleStartBattle() {
    this.selectStartBattle.emit();
  }
}
