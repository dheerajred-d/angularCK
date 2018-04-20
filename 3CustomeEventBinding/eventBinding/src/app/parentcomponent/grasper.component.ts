
import { Component, OnInit, Input } from '@angular/core';

import { Control } from './parentcomponent.component';

@Component({
  selector: 'app-grasper',
  template: `
     <div class="row">
        <div class="col-md-12">
            <input [type]="ipCtl.typeKey" [value]="ipCtl.valKey">
        </div>
    </div>
  `,
  styles: []
})
export class GrasperComponent implements OnInit {
  @Input() ipCtl: Control;
  constructor() {
  //  this.ipCtl = new Control();
   }

  ngOnInit() {
  }

}
