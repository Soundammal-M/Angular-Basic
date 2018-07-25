import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.scss']
})
export class MulComponent implements OnInit {
public mul:number;
  constructor() { }

  ngOnInit() {
  }
  Mul(a1,b1)
  {
  var a2=+a1;
  var b2=+b1;
  console.log(this.mul=a2*b2);
    
  }


}
