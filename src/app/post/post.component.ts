import { 
  Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
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

// runs after the content has been checked for changes, runs multiple times, calld when change detection runs.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

// projected content from the parent component runs after the content in initialized, runs once before the checkd couter part 
  ngAfterContentInit(): void {
      console.log('ngAfterContentInit() called');
      
  }

// run after the compontents template has been checked for changes, runs multiple times
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

// runs when the components template has been intialized, runs once before the checkd couter part, its the first time the content has been processed.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  // run when the component is destroyed obvi. side note: we have the option the remove functionality without memory leaks. 
  ngOnDestroy(): void {
      console.log('ngOnDestroy() called');
      
  }


}
