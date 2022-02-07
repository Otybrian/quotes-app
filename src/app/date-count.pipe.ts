import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime);
    const secondsInDay = 86400;
    var differenceInSeconds = dateDifference/1000;
    var countDate = differenceInSeconds/secondsInDay;


    if (countDate >= 1 && value > todayWithNoTime){
      return countDate;
    }else{
      return 0;
    }
  }

}
