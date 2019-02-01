import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.css']
})
export class ReactiveFormGroupComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}