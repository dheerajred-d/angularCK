import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things',
  template: `
    <h1>
      things is the sub component of Android component works!
    </h1>
  `,
  styles: []
})
export class ThingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
