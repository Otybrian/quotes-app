import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote (1, 'Yes we can!', 'Barrack Obama', new Date (2022,2,6)),
    new Quote (2, 'The higher you go the cooler it becomes','Geographers', new Date (2022,2,6)),
  ];

  toggleDetails(index:number){
    this.quote[index].showQuoteDetails = !this.quote[index].showQuoteDetails;
  }

  completeQuote(isComplete:boolean, index:number){
    if (isComplete) {

      confirm('Do you want to delete this quote?')
      this.quote.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
