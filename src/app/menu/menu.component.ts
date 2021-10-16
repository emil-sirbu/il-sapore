import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pastas: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getPasta().then(
      data => {
        this.pastas = data.results;
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}


