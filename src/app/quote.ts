export class Quote {

    showQuoteDetails: boolean;
 

    constructor(public id: number, public quoteName: string, public quoteDetails: string, public postedBy:string,
        public completeDate: Date){
        this.showQuoteDetails=false;
    }

}
