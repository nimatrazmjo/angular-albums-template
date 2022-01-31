import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../register/register.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(
     private formBuilder: FormBuilder,

     private authService: AuthService
     ) {

   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        email: '',
        password: ''
    });
  }

  submit ():void {
    this.authService.login(this.form.getRawValue())
      .subscribe({next: result => console.log(result),
        error: error =>console.log(error)});

  }

}
