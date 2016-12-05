import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
   host: {  class: 'row' },
   style:[`div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
    }`]
    template: ` 
    <div class="news"> 
      <div class="ui statistic"> 
        <div class="value"> 
          {{ votes }} 
        </div> 
        <div class="label">
           Points 
        </div> 
      </div> 
    </div> 
    <div class="twelve wide column"> 
      <a class="ui large header" href="{{ link }}"> 
        {{ title }} 
      </a> 
      <ul class="ui big horizontal list voters"> 
        <li class="item"> 
          <a href (click)="likes()">
           <i class="arrow up icon"></i>
             upvote 
            </a> 
        </li> 
        <li class="item"> 
          <a href (click)="disLikes()"> 
            <i class="arrow down icon"></i> 
              downvote
            </a> 
        </li> 
      </ul> 
    </div>
     ` 
})
export class ReviewComponent {
  votes: number;
  title: string;
  review: string;
 
 //give it some default values
 constructor(){
   this.title = 'my simple app';
   this.review = '';
   this.votes = 4; 
 }

 likes(){
   this.votes += 1;
 }

 disLikes(){
   this.votes -= 1;
 }

}
