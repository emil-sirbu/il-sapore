import { DishesHome } from "./dishes-home";

export interface ReqDishesHome {
    number: number;
    offset: number;
    results: DishesHome[];
    totalResults: number;
}