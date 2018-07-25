import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  public sub:number
  constructor() { }

  ngOnInit() {
  }
  Sub(a1,b1)
  {
  var a2=+a1;
  var b2=+b1;
  console.log(this.sub=a2-b2);
    
  }


}
