import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private DbzService: DbzService
  ) {}

  public get characters(): Character[] {
    return [...this.DbzService.characters];
  }

  public onDeletedCharacter(id: string): void {
    this.DbzService.deletedCharacterById(id);
  }

  public onNewCharacter(character: Character): void {
    this.DbzService.addCharacter(character);
  }

}
