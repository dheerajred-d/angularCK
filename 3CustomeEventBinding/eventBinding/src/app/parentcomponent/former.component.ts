
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Control } from './parentcomponent.component';

@Component({
  selector: 'app-former',
  template: `
       <div class="row">
        <div class="col-md-6">
            <input type="button" class="btn btn-primary" value="createTextBox" (click)="form(1)">
        </div>
        <div class="col-md-6">
            <input type="button" class="btn btn-primary" value="createButton" (click)="form(2)">
        </div>
    </div>
  `,
  styles: []
})
export class FormerComponent implements OnInit {
  @Output () formEv: EventEmitter<Control>;
  constructor() {
    this.formEv = new EventEmitter<Control> ();
   }

  ngOnInit() {
  }

  form(which:number){
  
    if(which == 1){
      this.formEv.emit({typeKey:"text",valKey:"This is Text"})
      
    }
    else{
      let ctl:Control = new Control();
      ctl.typeKey = 'button';
      ctl.valKey = 'Button';
      this.formEv.emit(ctl);
      
    }
  }

}
