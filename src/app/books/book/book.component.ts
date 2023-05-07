import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/books';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book:Book={} as Book;
  @Output() emitBook = new EventEmitter<Book>();
  isInCart:boolean=false;
  constructor(private cartService:CartService) { }
  ngOnInit(): void  {
  }

  addToCart(){
    this.isInCart=true
    this.cartService.add(this.book);
   // this.emitBook.emit(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book)
  }

}
