import { sugiValidator } from './mynameissugi';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  types = [1,2,3,4,5];

  form: any;

  ngOnInit() {

    this.form = this.fb.group({
      'title': [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          sugiValidator
        ]
      ],
      'subtitle': ['p2 default value', Validators.required],
      'types': this.fb.array(
        this.types.map((v, idx) => {
          return this.fb.control(v, Validators.required)
        })
      )
    })

  }

}