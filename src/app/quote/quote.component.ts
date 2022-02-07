import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[] = [
    new Quote (1, 'The while we breathe we hope, and where we are met with cynisms and doubts, and those who tell us that we cant, we will respond with a timeless creed that sums up the spirit of our people!', 'Barrack Obama','Brian', new Date (2022,2,6)),
    new Quote (2, 'Two hours are enough for a man to sleep, four for a woman, and six for a fool','Adolf Hitler','Francis', new Date (2022,2,6)),
    new Quote (3, 'Your time is limited, so do not waste it living for someone else. Do not be trapped by dogma – which is living with the results of the thinking by others.', 'Steve Jobs', 'Collins', new Date(2022,1,20)),
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


  addNewQuote(quote:any){
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
