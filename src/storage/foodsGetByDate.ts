import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodDTO } from 'src/dtos/FoodDTO';
import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function foodsGetByDate(date: string) {
    try {
        const storage = await AsyncStorage.getItem(`${FOOD_COLLECTION}-${date}`);
        const foods: FoodDTO[] = storage ? JSON.parse(storage) : [];
        return foods;
    } catch (error) {
        throw error;
    }
}