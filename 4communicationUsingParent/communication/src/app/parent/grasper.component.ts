import { Component, OnInit, Input } from '@angular/core';
import { Control } from './parent.component';

@Component({
  selector: 'app-grasper',
  template: `
    <div class="row">
    
        <div class="col-md-12">
           <div class="jumbotron">
              <h1 class="text-center">This is Child 2</h1>

             <input [type]="ipCtl.typeKey" [value]="ipCtl.valKey" >
          </div>
        </div>
    </div>
  `,
  styles: []
})
export class GrasperComponent implements OnInit {
@Input () ipCtl:Control;
  constructor() { 
    this.ipCtl= new Control();
  }

  ngOnInit() {
  }

}
