import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.header-section') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('fixed-navbar');
    } else {
      element.classList.remove('fixed-navbar');
    }
  }

  openDialog() {
    this.dialog.open(BookingFormComponent);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
