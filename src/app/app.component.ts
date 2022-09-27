import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'daniel guzman'
  // name = 'cody davis'
  imgUrl = 'https://picsum.photos/id/237/500/500'
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'Cheese', 'Sauce'],
    size: 'large'
  }
  
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