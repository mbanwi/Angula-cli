import { Component } from '@angular/core';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ReviewComponent]
})
export class AppComponent {
  constructor(){

  }
  addReview(title: HTMLInputElement, review:HTMLInputElement){
    console.log(`Adding review title: ${title.value} and review: ${review.value}`); 
  }
}
