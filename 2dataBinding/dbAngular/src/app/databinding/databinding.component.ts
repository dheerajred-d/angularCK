import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  componentName : string;
  ipType : string;
  border : string;
  dynWd : string = '400px';
  constructor() {
    this.componentName ='Android';
    this.ipType = 'button';
    this.border = '1px solid green';
   }
  onePlusOne(){
    return 1 + 1;
  }
  changeBorder(){
    console.log('Hi');
    this.border = '1px solid blue';
  }
  ngOnInit() {
  }

}
