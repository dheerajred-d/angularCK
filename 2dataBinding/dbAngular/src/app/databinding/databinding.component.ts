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
  constructor() {
    this.componentName ='Android';
    this.ipType = 'button';
    this.border = '1px solid green';
   }
  onePlusOne(){
    return 1 + 1;
  }
  ngOnInit() {
  }

}
