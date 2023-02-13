import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodDTO } from 'src/dtos/FoodDTO';
import { foodsGetByDate } from './foodsGetByDate';
import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function foodAddByDate(newFood: FoodDTO, date: string) {
    try {
        const storedFoods = await foodsGetByDate(date);
        const storage = JSON.stringify([...storedFoods, newFood]);
        await AsyncStorage.setItem(`${FOOD_COLLECTION}-${date}`, storage);
    } catch (error) {
        throw error;
    }
}