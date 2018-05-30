import { Component} from '@angular/core';
import { RemoteService } from './remote.service';

@Component({
  selector: 'app-rem-one',
  template: `
    <div class="container">
  <div class="row">
    <div class="col-md-12">
        <h2>rem one completed</h2>
        <ul>
        <li *ngFor= "let nm of names">{{nm}}</li>
        </ul>
    </div>
  </div>
</div>
  `,
  styles: [],
  providers : [RemoteService]
})
export class RemOneComponent  {
  names: string[];
  constructor(
    private remote: RemoteService
  ) {
    remote.addName('shoes');
    remote.addName('jamika');
    this.names = remote.getNames();
  }



}
