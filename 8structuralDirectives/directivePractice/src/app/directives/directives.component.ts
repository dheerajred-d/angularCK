import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  mobiles: string[];

  constructor() {
     this.mobiles = [];
      this.mobiles.push('samsung');
      this.mobiles.push('Apple');
      this.mobiles.push('Motorola');
      this.mobiles.push('Rim');
      this.mobiles.push('Pixel 1');
      this.mobiles.push('Pixel 2');
   }

  ngOnInit() {
  }

}
