import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface ImagesList{
  src: string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('box', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out')
      ])
    ])
  ]
})
export class SlideshowComponent implements OnInit {
  
  public slides: ImagesList[] = [
    {
      src:'/assets/img/two-plate-pasta.jpg',
    },
    {
      src:'/assets/img/burrata.jpg',
    },
    {
      src:'/assets/img/pizza-lasagna.jpg', 
    },
  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 5000)  
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0;
    }
  }

  pre() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }
}
