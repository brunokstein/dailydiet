import { FoodDTO } from "./FoodDTO";

export type FoodByDateDTO = {
    date: string;
    food: FoodDTO[];
}