import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  results: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getItems().then(
      data => {
        this.results = this.chunk(data.results, 2);
      },
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  private chunk(arr: any[], chunkSize: number): any[] {
    if (chunkSize <= 0) {
      throw 'Invalid chunk size';
    }

    const R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }

    return R;
  }
}


