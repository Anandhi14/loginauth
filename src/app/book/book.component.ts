import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  bookForm: any;
  myBooks:any=[];
  constructor(private book:BookService){}
  ngOnInit(): void {
    this.bookForm=new FormGroup({
      'bookid':new FormControl('',Validators.required),
      'bookname':new FormControl('',Validators.required),
      'author':new FormControl('',Validators.required)
    });
}
onPushBook(){
  const bookid=this.bookForm.get('bookid').value;
  const bookname=this.bookForm.get('bookname').value;
  const author=this.bookForm.get('author').value;

  this.myBooks.push({
    bookid:bookid,
    bookname:bookname,
    author:author
    
})
}
onSave(){
  this.book.saveBook(this.myBooks).subscribe(sub=>{
   console.log(sub)
  });
}
onget(){
  this.book.getBook().subscribe(sub=>{
    console.log(sub)
  }); 
}
}