import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registrationForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {

    const payload = this.registrationForm.value;
  delete payload.confirmPassword;
  console.log("payload",payload);
  
    //   this.service.registerUser(this.registrationForm.value).subscribe(res => {

    //     this.router.navigateByUrl('/sign-in');
    //     this.toastr.success('please contect admin for enable access','Registered Successfully')
    //   })
    //   console.log(this.registrationForm.value);
    }
    else{
      this.toastr.warning('Please enter valid data');
    }
  }
}