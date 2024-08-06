import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumComponent } from './component/num/num.component';
import { Num } from './models/num.interface';
import { FormsComponent } from './component/forms/forms.component';
import { NumService } from './service/num.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NumComponent, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private numService: NumService) { }
  title = 'Hello World';
  arr = ['Rachel', 'Tamar', 'Ahuva'];
  flag: boolean = true;
  flagNum: Boolean = true;

  public observable: Observable<any> = new Observable((observable) => {
    observable.next('Start');
    setTimeout(() => {
      observable.next('Working')
    }, 3000)
    setTimeout(() => {
      observable.complete()
    }, 6000)
  })

  ngOnInit() {
    console.log(this.numService.getNum())
    this.numService.setNum(this.listOfNum)
    console.log(this.numService.getNum())
    this.observable.subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log('Complete')
      }
    )
  }

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

  public DeleteNum(NumIndex: number): void {
    this.listOfNum.splice(NumIndex, 1)
  }
}

