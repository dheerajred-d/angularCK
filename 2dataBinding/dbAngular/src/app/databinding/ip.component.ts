import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-ip',
  template: `
   <div class="container">
      <div class="row">
           <div class="col-md-12">
           Address is {{address}}
   </div>
      </div>

   </div>
  `,
  styles: []
})
export class IpComponent implements OnInit {
  
  @Input()
  
  address : string;
  constructor() { }

  ngOnInit() {
  }

}
