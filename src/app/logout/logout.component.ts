import { Component } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private firebaseService: FirebaseserviceService, private router: Router) { }

  
    // Call the logout method from the service
    logout(){
    this.firebaseService.logout().then(() => {
      // After logout, navigate to the login page or any other desired page
      this.router.navigate(['/login']);
    });}
  }

