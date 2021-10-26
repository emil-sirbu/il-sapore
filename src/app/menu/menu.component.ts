import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pastas: any[] = [];

  constructor(private foodService: FoodService,
              private router: Router) { }

  ngOnInit(): void {
    this.foodService.getPasta().then(
      data => {
        this.pastas = data.results;
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  goToMenuPage() {
    this.router.navigate(['/menu'])
  }
}


