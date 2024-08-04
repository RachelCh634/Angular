import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumComponent } from './component/num/num.component';
import { Num } from './models/num.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Hello World';
  arr = ['Rachel', 'Tamar', 'Ahuva'];
  flag: boolean = true;
  flagNum: Boolean = true;
  Destroy() {
    this.flagNum = !this.flagNum;
  }

  
  @Input() listOfNum: Num[] = [
    {
      rating: 1,
      date: new Date()
    },
    {
      rating: 8,
      date: new Date()
    }
  ];
}

