import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  SignInForm !: FormGroup;
  errorMessage : string = '';

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  initForm(){
    this.SignInForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.SignInForm.value['email'];
    const password = this.SignInForm.value['password'];
    this.authService.signInUser(email, password).subscribe(
      (res:any)=> {
         console.log(res);
        localStorage.setItem('user', JSON.stringify(res))
  
        // redirect to home
         this.router.navigate(['/']);
      },
      (error)=>{
        console.log(error);
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

}
