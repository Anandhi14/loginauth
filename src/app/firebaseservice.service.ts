import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {
  

  constructor(public firebaseauth:AngularFireAuth , private router:Router) { }
  isloggedIn=false;
  //signIn
  signin(email:string,password:string): Promise<void>
 {
  return this.firebaseauth.signInWithEmailAndPassword(email, password).then((res) => {
      this.isloggedIn = true;
     
      localStorage.setItem("user", JSON.stringify(res.user));
    });
  }
  //signup
  signup(email:string,password:string): Promise<void>{
    return this.firebaseauth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.isloggedIn = true;
      localStorage.setItem("user", JSON.stringify(res.user));
    });
  }
  logout():Promise<void>{   
    //ppjj
   return  this.firebaseauth.signOut();
    localStorage.removeItem('user')
  }
  register(email:string,password:string){
    return this.firebaseauth.createUserWithEmailAndPassword(email,password).then((res)=>
    {
      alert("succesfully register");
      this.router.navigate(['/login']);
    // },err=>{
    //   alert("error Message");
    //   this.router.navigate(['/register']);
      localStorage.setItem("user", JSON.stringify(res.user));
    })
    
  }
  
}
