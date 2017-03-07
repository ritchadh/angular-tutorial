import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('rchad2',[Validators.required, Validators.minLength(4)]),
    id: new FormControl('125918',[Validators.required, Validators.pattern('^[0-9]*$')])
  });
  constructor() { }

  ngOnInit() {
  }

}
