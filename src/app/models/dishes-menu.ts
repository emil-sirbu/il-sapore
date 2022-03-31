import { Ingredients } from "./ingredients";

export interface DishesMenu {
    id: number;
    image: string;
    imageType: string;
    likes: number;
    missedIngredientCount: number;
    missedIngredients: Ingredients[];
    title: string;
    unusedIngredients: any[];
    usedIngredientCount: number;
    usedIngredients: any[];
}