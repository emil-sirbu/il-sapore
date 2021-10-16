import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  pizzas: any[] = [];
  pastas: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getPizza().then(
      data => {
        this.pizzas = data.results; 
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );  
      
    this.foodService.getPastaMenu().then(
      data => {
        this.pastas = data.results;
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );  
  }
}