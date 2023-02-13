import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodByDateDTO } from 'src/dtos/FoodByDateDTO';
import { foodsGet } from './foodsGet';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { FoodDTO } from 'src/dtos/FoodDTO';

export async function foodAdd(newFoodByDate: FoodByDateDTO, newFood: FoodDTO) {
    try {
        const storedFoods = await foodsGet();
        storedFoods.forEach((item) => {
            if (item.date === newFoodByDate.date) {
                item.food.push(newFood);
            } else { 
                storedFoods.push(newFoodByDate);
            }
        });
        const storage = JSON.stringify(storedFoods);
        await AsyncStorage.setItem(`${FOOD_COLLECTION}`, storage);
    } catch (error) {
        throw error;
    }
}