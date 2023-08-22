import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;
  // link = '/sign-up';

  constructor(private authService:AuthService,private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
      // this.initForm();
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })   
  }
  
  loginProcess(){
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((result: any) => {

        if(result){
          console.log('login values =>', result);
          sessionStorage.setItem('token',result.accessToken);
          sessionStorage.setItem('user',JSON.stringify(result.data));
          // alert('login sucessfully');  
          this.router.navigateByUrl('/home');
        }else{
          alert(result);
        }
      });

    }
  }

  // ngOnInit() {
  //   this.loginForm = this.loginForm({
    
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
    
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   }
  // }
}
