import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-reacive',
  templateUrl: './reacive.component.html',
  styleUrls: ['./reacive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReaciveComponent implements OnInit {
  TestForm : FormGroup;

  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.TestForm = this._fb.group({
      date : [ null, [Validators.required]]
    })

    this.TestForm.get('date').setValue('2019-06-12 03:20:27')

    console.assert(this.TestForm.get('date'))
  }

}