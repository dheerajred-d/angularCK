import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
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