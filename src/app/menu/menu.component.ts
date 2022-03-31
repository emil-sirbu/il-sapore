import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { DishesHome } from '../models/dishes-home';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pastas: DishesHome[] = [];

  constructor(private foodService: FoodService,
              private router: Router) { }

  ngOnInit(): void {
    this.foodService.getPasta().subscribe((data) => { 
        this.pastas = data.results;
      }, (error) => {
        console.error(`Error: ${error}`);
      });
  }

  goToMenuPage() { 
    this.router.navigate(['/menu'])
  }
}


