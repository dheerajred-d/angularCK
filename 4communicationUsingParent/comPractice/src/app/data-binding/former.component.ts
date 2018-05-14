import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Control } from './data-binding.component';

@Component({
  selector: 'app-former',
  template: `
     <div class="container">
        <div class="row">
        <h3 class="text-left">child first Former Component</h3>
          <div class="col-md-6">
           <input type="button" value="TextBox" class="btn btn-primary" (click)="form(1)"/>
          </div>
          <div class="col-md-6">
          <input type="button" value="ButtonBox" class="btn btn-primary" (click)="form(2)"/>
          </div>
        </div>
      </div>  
  `,
  styles: []
})
export class FormerComponent implements OnInit {
  @Output() formEv: EventEmitter<Control>;
  constructor() {
    this.formEv = new EventEmitter<Control>();
  }

  ngOnInit() {
  }


  form(which:number){
    if(which === 1){
      this.formEv.emit({ typeEntity:"text" , valEntity:"some Text Box Text"});
      console.log('TextBox Created')
    }else{
      let ctrl : Control = new Control();
      ctrl.typeEntity ="button";
      ctrl.valEntity ="Wanna Do This";
      this.formEv.emit(ctrl);
      console.log('ButtonBox Created')
    }
  }

}
