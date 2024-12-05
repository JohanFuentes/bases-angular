import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  public onDeletedCharacter(id?: string): void{
    if (!id) return;
    this.onDeleted.emit(id);
  };
}
