import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote (1, 'Yes we can!', 'Barrack Obama'),
    new Quote (2, 'The higher you go the cooler it becomes','Geographers'),
  ];

  toggleDetails(index:number){
    this.quote[index].showQuoteDetails = !this.quote[index].showQuoteDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
