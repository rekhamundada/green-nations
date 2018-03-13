import { FormGroup } from '@angular/forms';
import { FieldDefinition } from './../field-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {
  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor() { }
}
