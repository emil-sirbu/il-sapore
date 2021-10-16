import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiRoot: string = "https://api.spoonacular.com/recipes/complexSearch?";
  public apiKey: string = "af86e6502834441e8973df21dcfd9348";

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
