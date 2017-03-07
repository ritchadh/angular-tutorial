import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})

export class TemplateDrivenComponent {

  public name:string;
  public oracleId:number;
  public power:string;

  des=['Manager',
    'Senior Manager',
    'VP',
    'Director'
  ];
  submitted = false;
  onSubmit() { this.submitted = true; }

}
