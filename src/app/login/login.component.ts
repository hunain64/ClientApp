import { Component, OnInit } from '@angular/core';
import { ILogin, ILoginInfo } from './Ilogin';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[LoginService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: ILogin;
  logins: ILogin[] = [];
  LoginTyped: ILoginInfo[] = [];
  //sprintForm!: FormGroup;
  formBuilder:FormBuilder;
  returnUrl: string;

  
  constructor(public loginService: LoginService, private router: Router, private route: ActivatedRoute,) {}

  addLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  loginUser() {
    // this.login.username = this.addLoginForm.value.username;
    // this.login.password = this.addLoginForm.value.password;
    this.login = this.addLoginForm.value;
    // this.login = new IL(form.value['login'], form.value['password']); 
    this.loginService
      .loginUser(this.login)
      .subscribe((response: ILoginInfo) => {
        console.log(response);


        this.logins.push({ username: response.username, password: response.password });
        this.LoginTyped.push({
          username: response.username,
          password: response.password,        
        });
        if(this.LoginTyped.length > 0)
          this.router.navigate(['../dashboard']);
      });
  }

  ngOnInit() {  
    // this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

}
