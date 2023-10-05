import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http:HttpClient) { }
  saveBook(books:any[]){
return this.http.post("https://first-a3c7e-default-rtdb.firebaseio.com/data.json",books);
  }
  getBook(){
    return this.http.get("https://first-a3c7e-default-rtdb.firebaseio.com/data.json");
      }
}
