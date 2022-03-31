import { DishesMenu } from './dishes-menu';

export interface ReqDishesMenu {
    number: number;
    offset: number;
    results: DishesMenu[];
    totalResults: number;
}