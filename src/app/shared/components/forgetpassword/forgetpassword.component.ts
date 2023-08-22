import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  link = '/forgot';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {  
      console.log(this.forgotForm.value);
    }
  }
}
