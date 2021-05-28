import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiRoot: string = "https://api.spoonacular.com/recipes/complexSearch?";
  private apiKey: string = "af78880bd882469cafc80fb5e5e498f8";

  constructor(private http: HttpClient) {
  }

  getItems(): Promise<any> {
    let apiUrl = `${this.apiRoot}/get`;
    const apiQuery = {
      params: new HttpParams()
        .set("query", "pasta")
        .set("number", "4")
        .set("apiKey", `${this.apiKey}`)
    };

    return this.http.get(apiUrl, apiQuery).toPromise();
  }
}
