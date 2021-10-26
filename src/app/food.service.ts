import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiRoot: string = "https://api.spoonacular.com/recipes/complexSearch?";
  public apiKey: string = "9f58fdaad34b4e579d5328ccb40d394d";

  constructor(private http: HttpClient) {
  }

  // Home
  getPasta(): Promise<any> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pasta")
        .set("number", "4")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get(apiUrl, apiQuery).toPromise();
  }

  // Menu
  getPizza(): Promise<any> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pizza")
        .set("fillIngredients", "true")
        .set("number", "8")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get(apiUrl, apiQuery).toPromise();
  }

  getPastaMenu(): Promise<any> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pasta")
        .set("fillIngredients", "true")
        .set("number", "8")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get(apiUrl, apiQuery).toPromise();
  }
}
