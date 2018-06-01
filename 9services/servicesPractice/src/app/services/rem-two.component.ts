import { Component, OnInit } from '@angular/core';
import { RemoteService } from './remote.service';

@Component({
  selector: 'app-rem-two',
  template: `
   <div class="container">
     <div class="row">
      <div class="col-md-12">
        <h2>Rem Two WORKS!</h2>
        {{changedName}}
      </div>
  </div>

   </div>
  `,
  styles: []
})
export class RemTwoComponent implements OnInit {
  changedName: string;
  constructor(
    private remote: RemoteService
  ) {
  this.remote.subscribe(nm => this.changedName = nm);
  }

  ngOnInit() {
  }

}
