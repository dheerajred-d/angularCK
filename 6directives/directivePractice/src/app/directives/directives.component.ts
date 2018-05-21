import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit  {
  // isWell:Boolean=false;
 //fullColor : string;
  textColor:string;
  mobiles: string [];
  constructor() {
    
   this.mobiles =[];
    this.mobiles.push('samsung');
    this.mobiles.push('Motorola');
    this.mobiles.push('Rim');
    this.mobiles.push('Apple');
    this.mobiles.push('Microsoft');
    this.mobiles.push('Lenovo');
    this.mobiles.push('Dell');
    this.mobiles.push('oppo');
    this.mobiles.push('vivo');
    this.mobiles.push('Nokia')
    
   
  }

  ngOnInit() {
    //this.fullColor ="1px solid "+ this.textColor;
  }


}
