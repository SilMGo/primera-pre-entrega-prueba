import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrl: './alumnos-form.component.scss'
})
export class AlumnosFormComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // validacion apra que no se envie form vacio
    } else {
      this.userSubmitted.emit(this.userForm.value);
      this.userForm.reset(); // restaura valor a vacio
    }
  }
}