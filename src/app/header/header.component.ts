import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.header-section') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('fixed-navbar');
    } else {
      element.classList.remove('fixed-navbar');
    }
  }
}
