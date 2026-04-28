import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterVal = signal(0);

  increment(){
    console.log('click')
     this.counterVal.update(val => val+1);
  }

  decrement(){
     this.counterVal.update(val => val-1);
  }

  reset(){
    this.counterVal.set(0);
  }
}
