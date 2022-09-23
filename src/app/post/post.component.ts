import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck {
  @Input('img') postImg = ''
  // the string is a type safety to the custom event.
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor() called', this.postImg);
    
  }

  ngOnInit() {
    // 
    console.log('ngOnInit() called', this.postImg);
  }

  ngOnChanges() {
    // will run when the component changes 
      console.log('ngOnChanges() called') 
  }

  ngDoCheck() {
    // runs after a change dectection cycle accures 
    // perform updates that angular may miss. 
      console.log('ngDoCheck() called');
  }

}
