import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Forms';
  submenu = [{
    name: 'Template Driven',
    path: 'template-driven'
  }, {
    name: 'Model Driven',
    path: 'model-driven'
  }];
  constructor() { }
  ngOnInit() {
  }
}