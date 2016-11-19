import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../validators/validation.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.userForm = this.userCreateForm();
  }

  saveUser() {
    console.log(this.userForm.value);
  }

  private userCreateForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.minLength(6), ValidationService.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), ValidationService.passwordValidator]],
      gender: ['', Validators.required]
    });
  }

}
