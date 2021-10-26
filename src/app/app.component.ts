import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let element = document.querySelector('app-header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('fixed-top');
    } else {
      element.classList.remove('fixed-top');
    }
  }

}
