import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:any;
  email:string='';
  password:string='';

  constructor(
    private router: Router,
    private firebaseService: FirebaseserviceService
  ) {}
 
  
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required)
      
    });
  }
  register() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
  
    this.firebaseService.signup(email, password).then(() => {
      // Registration was successful, navigate to the login page
      this.router.navigate(['/login']); // Replace 'login' with your actual login route
    }).catch((error) => {
      // Handle registration errors here
      console.error('Registration error:', error);
      // You can display an error message to the user if needed
    });
  }
  }
  
 




  

