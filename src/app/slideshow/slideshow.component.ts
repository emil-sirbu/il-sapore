import { Component, OnInit } from '@angular/core';

interface ImagesList{
  src:string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
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
    }, 4000)  
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex=0;
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
