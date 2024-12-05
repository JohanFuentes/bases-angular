import { Injectable } from '@angular/core';
import { v4 as generateId } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: generateId(),
    name: 'Goku',
    power: 10000
  }, {
    id: generateId(),
    name: 'Vegeta',
    power: 9000
  },
  {
    id: generateId(),
    name: 'Trunks',
    power: 8000
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      id: generateId(),
      ...character,
    }
    // console.log('Main Page');
    // console.log(character);
    //this.characters.unshift(character);
    //this.characters.push(character);
    this.characters = [...this.characters, newCharacter];
  }

  // onDeletedPadre(index: number): void {

  //   this.characters.splice(index, 1);
  // }

  deletedCharacterById(id: string): void {

      this.characters = this.characters.filter(character => character.id !== id);
  }

}
