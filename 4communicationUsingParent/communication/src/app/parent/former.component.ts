import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Control} from './parent.component';

@Component({
  selector: 'app-former',
  template: `
   
    <div class="row">
    
        <div class="col-md-12">
           <div class="jumbotron">
              <h1 class="text-center">This is Child1</h1>

              <div class="col-md-6">
                  <input type="button" value="textMaker" (click)="form(1)">
              </div>
              <div class="col-md-6">
                  <input type="button" value="buttonMaker" (click)="form(2)">
              </div>
          </div>
        </div>
    </div>

  `,
  styles: []
})
export class FormerComponent implements OnInit {
  
  @Output () formEv:EventEmitter<Control>;
  constructor() { 
    this.formEv = new EventEmitter<Control> ();
  }

  ngOnInit() {
  }


  form(which){
   
    if(which ===1){
     this.formEv.emit({typeKey:"text", valKey:"This is Text"})
    }
    else{
      this.formEv.emit({typeKey:"button" , valKey:"This is Button"})
    }
  }
}
