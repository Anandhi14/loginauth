import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseserviceService } from './firebaseservice.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseservice: FirebaseserviceService, private router: Router) {}
  canActivate(): boolean {
    if (this.firebaseservice.isloggedIn) {
      // User is logged in, allow access to other routes.
      return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  
}

