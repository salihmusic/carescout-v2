import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { LoginCredentials } from '../models/login-credentials.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    let loginCredentials: LoginCredentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.loginService.login(loginCredentials).subscribe((res) => {
      if (res) {
        this.loginService.getAllCredentials().subscribe((resp) => {
          console.log(resp);
        });
      }
    });
  }
}
