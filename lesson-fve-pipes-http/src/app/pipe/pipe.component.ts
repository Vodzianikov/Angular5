import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  num = 0.5;
  PI = 3.141589;
  str = "String";
  date = new Date();

}
