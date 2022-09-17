import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm !: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required] });
  }

  onSubmit(){
    const name = this.signUpForm.value['name'];
    const email = this.signUpForm.value['email'];
    const password = this.signUpForm.value['password'];
    this.authService.signUpUser(name, email, password).subscribe(
      (res) =>{ console.log(res);
       // redirect to login
       this.router.navigate(['/login']);
    },
      (error) =>{ console.log('this the error:', error);}
    )
  }

  ngOnInit(): void {
    this.initForm();
  }

}
