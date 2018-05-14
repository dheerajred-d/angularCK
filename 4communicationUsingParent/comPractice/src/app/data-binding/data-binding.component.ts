import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
componentName:string;
ipType:string;
border:string;
control:Control;
dynaWidth:string ="200px";
  constructor() {
    this.componentName="Android";
    this.control = new Control();
    this.ipType="button";
    this.border ="1px solid black";
   }

  ngOnInit() {
  }
  chamgeBorder(){
    this.border="1px solid blue";
  }




}
export class Control {

  typeEntity: string;
  valEntity :string; 

}