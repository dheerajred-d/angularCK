import { Component, OnInit, Input } from '@angular/core';

import { Control } from './data-binding.component';
@Component({
  selector: 'app-grasper',
  template: `
     <div class="container">
  <div class="row">
    <div class="col-md-12">
      <input [type]="ipCtl.typeEntity" [value]="ipCtl.valEntity">
    </div>
  </div>
</div>
  `,
  styles: []
})
export class GrasperComponent implements OnInit {
  @Input() ipCtl:Control;

  constructor() {
    this.ipCtl = new Control();
   }

  ngOnInit() {
  }

}
