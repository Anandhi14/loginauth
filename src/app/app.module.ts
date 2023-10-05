import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirebaseserviceService } from './firebaseservice.service';



import { ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    
    BookComponent,
         LoginComponent,
         RegisterComponent,
         LogoutComponent

    
    
  ],
  imports: [
    BrowserModule,HttpClientModule ,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC7_VP6Q4AWQpxCBfll1a2gW-wlqWKYJ98",
      authDomain: "first-a3c7e.firebaseapp.com",
      databaseURL: "https://first-a3c7e-default-rtdb.firebaseio.com",
      projectId: "first-a3c7e",
      storageBucket: "first-a3c7e.appspot.com",
      messagingSenderId: "557951319901",
      appId: "1:557951319901:web:8d345f342b69f9ff6172b4",
      measurementId: "G-CYBWGBHTWX"
    }
    )
  
  ],
  providers: [BookService,FirebaseserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
