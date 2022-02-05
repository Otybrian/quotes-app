import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotedescription',
  templateUrl: './quotedescription.component.html',
  styleUrls: ['./quotedescription.component.css']
})
export class QuotedescriptionComponent implements OnInit {

  @Input () quote!:Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
