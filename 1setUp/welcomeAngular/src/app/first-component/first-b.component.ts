import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-b',
  template: `
  <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
  `,
  styles: [`.alert{
    border : 1px solid red;
  }`]
})
export class FirstBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
