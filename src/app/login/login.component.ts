import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
loginForm:any;
loginError: string = ''; 
 
constructor(private router:Router, private firebaseauth: AngularFireAuth,
  private firebaseService: FirebaseserviceService){}
ngOnInit(): void {
  this.loginForm=new FormGroup({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    
  });
}
login() {
  const email = this.loginForm.get('email').value;
  const password = this.loginForm.get('password').value;

  this.firebaseService.signin(email, password)
    .then(() => {
      this.router.navigate(['/book']); 
    })
    .catch((error: any) => {
     
      console.error(error);
      this.loginError = error.message; 
    });
    // this.router.navigate(['/book']);
}
}
