import { FieldDefinition } from './../field-definition';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() vm: any;
  @Input() vmDefinition: Array<FieldDefinition>;
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location
  ) { }
  clearform() {
    let group = {};
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach( field => {
      group[field.key] = field.required ? new FormControl(
        this.vmCopy[field.key], Validators.required) : new
        FormControl( this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['errorMessage'].currentValue && this.status === 'waiting') {
      this.status = '';
    }
  }

  ngOnInit() {
  this.clearform();

    this.route.params.subscribe(params => {
      this.operation = params['operation'];
      this.clearform();
    });
  }
  onBack() {
    this.errorMessage = null;
    this.location.back();
  }
  onCancel() {
    this.onBack();
  }
  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
      console.log(this.form.value)
    }

  }
  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route});
  }
  onSubmit() {

  }
  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }

  }

}
