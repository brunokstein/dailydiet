import AsyncStorage from '@react-native-async-storage/async-storage';
import { foodsGetByDate } from '@storage/foodsGetByDate';
import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function foodRemoveById(foodId: number, date: string) {
    try {
        const storedFoods = await foodsGetByDate(date);
        const foods = storedFoods.filter(food => food.id !== foodId);
        await AsyncStorage.setItem(`${FOOD_COLLECTION}-${date}`, JSON.stringify(foods));
    } catch (error) {
        throw error;
    }
}