import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    if (max < 1) {
      throw new Error("max musi być większe lub równe 1");
    }
    
    return Math.floor(Math.random() * max) + 1;
  }
}
