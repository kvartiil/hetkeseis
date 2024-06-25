import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Yld1Component } from '../yld1/yld1.component';
import { HetkavaComponent } from '../hetkava/hetkava.component';
import { Yld2Component } from '../yld2/yld2.component';
import { Yld3Component } from '../yld3/yld3.component';
import { Yld4Component } from '../yld4/yld4.component';
import { Graaf10Component } from '../graaf10/graaf10.component';
import { Yld6Component } from '../yld6/yld6.component';
import { Varav5Component } from '../varav5/varav5.component';
import { Varav6Component } from '../varav6/varav6.component';
import { Varav7Component } from '../varav7/varav7.component';
import { Varav8Component } from '../varav8/varav8.component';
import { Hetk1Component } from '../hetk1/hetk1.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  templateUrl: './tabx.component.html',
  styleUrls: ['./tabx.component.scss'],
  imports: [Yld1Component, HetkavaComponent, Yld2Component, Yld3Component, Yld4Component,  Graaf10Component, Yld6Component, Varav5Component, Varav6Component, Varav7Component, Varav8Component, Hetk1Component]
})
export class TabComponent {//} implements OnInit {
  //myForm: FormGroup
  //constructor(private fb: FormBuilder) {
  //  this.buildForm()
  // }

  //buildForm(){
  //  this.myForm = this.fb.group({
  //    buyInAmount: ['', Validators.required],
  //    buyInGrams: ['', Validators.required]
  //  })
  //}


  //ngOnInit() {
  //}

}