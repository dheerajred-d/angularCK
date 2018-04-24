import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  control: Control;
  constructor() { 
    this.control = new Control();
  }

  ngOnInit() {
  }

}
export class Control{
  typeKey:string;
  valKey:string;
}