import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value.description);
  }
}