import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent implements OnInit {
  public  div: number
  constructor() { }

  ngOnInit() {
  }
  Div(a1,b1)
  {
  var a2=+a1;
  var b2=+b1;
  console.log(this.div=a2/b2);
    

}
