import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'Daniel'
  imgUrl = 'https://picsum.photos/id/237/500/500'
  
  getName() {
    return this.name
  }
  // event binding w/type assertion
  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event);
    
  }
}