import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'one-form',
  templateUrl: './one-form.component.html',
  styleUrls: ['./one-form.component.css']
})
export class OneFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value.description);
  }
}