import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReqDishesHome } from './models/request-dishes-home';
import { ReqDishesMenu } from './models/request-dishes-menu';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiRoot: string = "https://api.spoonacular.com/recipes/complexSearch?";
  public apiKey: string = "9f58fdaad34b4e579d5328ccb40d394d";

  constructor(private http: HttpClient) {
  }

  // Home
  getPasta(): Observable<ReqDishesHome> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pasta")
        .set("number", "4")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get<ReqDishesHome>(apiUrl, apiQuery)
                    .pipe(catchError(this.handleError));
  }

  // Menu
  getPizza(): Observable<ReqDishesMenu> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams() 
        .set("query", "pizza")
        .set("fillIngredients", "true")
        .set("number", "8")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get<ReqDishesMenu>(apiUrl, apiQuery)
                    .pipe(catchError(this.handleError));
  }

  getPastaMenu(): Observable<ReqDishesMenu> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pasta")
        .set("fillIngredients", "true")
        .set("number", "8")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get<ReqDishesMenu>(apiUrl, apiQuery)
                    .pipe(catchError(this.handleError));
  }

  // Handle Error
  handleError(error: any) {
    return throwError(error.message || "Server Error");
  }
}
