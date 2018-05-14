import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit , OnChanges {
  // isWell:Boolean=false;
 //fullColor : string;
textColor:string;
  constructor() {

   }

  ngOnInit() {
    //this.fullColor ="1px solid "+ this.textColor;
  }
  onClickIp(){
 //   console.log('Hi');
   // this.isWell = !this.isWell;
  }
  ngOnChanges(){
   // this.fullColor = "1px solid " + this.textColor;
   // console.log(`Full Color ${this.fullColor}`)
  }
}
