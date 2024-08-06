import { Injectable } from '@angular/core';
import { Num } from '../models/num.interface';

@Injectable({
  providedIn: 'root'
})
export class NumService {
  public random: number = 58
  constructor() { }
  private _num: Num[] = []
  public getNum(): Num[] {
    return this._num
  }
  public setNum(num: Num[]): void {
    this._num = [...this._num, ...num]
  }
}
