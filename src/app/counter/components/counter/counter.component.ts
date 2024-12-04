import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {

  public titulo: string = 'Counter Component';
  public numero: number = 10;

  increaseBy(value: number): void{
    this.numero += 1;
  }

  decreaseBy(value: number): void{
    this.numero -= 1;
  }

  reset(): void{
    this.numero = 10;
  }

}
