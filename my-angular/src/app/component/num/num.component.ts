import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Num } from '../../models/num.interface';
import { TypeNum } from '../../models/num.enum';

@Component({
  selector: 'app-num',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.scss'] 
})


export class NumComponent implements OnInit {

  public num: Num = {
    rating: 5,
    date: new Date()
  }

  @Input() newNum?: Num;

  ngOnInit() {
    console.log('ngOnInit num works!!')
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }
  
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  public changeNum(event: Event): void {
    this.num = {
      rating: 1,
      date: new Date()
    }
  }
}
