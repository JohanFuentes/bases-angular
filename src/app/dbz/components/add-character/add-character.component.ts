import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCaracter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  public emitCharacter(): void {

    // debugger;

    //console.log(this.character);

    if (this.character.name.trim().length === 0 || this.character.power < 0) {
      return;
    }

    this.onNewCaracter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }
}
