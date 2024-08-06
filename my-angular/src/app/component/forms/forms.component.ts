import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumService } from '../../service/num.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  constructor(private numService: NumService) { }
  ngOnInit() {
    console.log(this.numService.getNum())
  }
  langs: string[] = ['English', 'French', 'Spanish', 'Hebrew'];
  @ViewChild('f') form: any;
  public onSubmitForm():void{
    console.log("Our Form" , this.form)
  }
}
