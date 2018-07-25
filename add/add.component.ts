import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public sum:number;
 
  constructor() {
   
   }

  ngOnInit() {
  }
  Add(a1,b1)
  {
  var a2=+a1;
  var b2=+b1;
  console.log(this.sum=a2+b2);
    
  }

}
