import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { DishesMenu } from '../models/dishes-menu';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  pizzas: DishesMenu[] = [];
  pastas: DishesMenu[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getPizza().subscribe((data) => {
        this.pizzas = data.results; 
      }, (error: any) => {
        console.error(`Error: ${error}`);
      });  
      
    this.foodService.getPastaMenu().subscribe((data) => {
        this.pastas = data.results;
      }, (error: any) => {
        console.error(`Error: ${error}`);
      });  
  }
}