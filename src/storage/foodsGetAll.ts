import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodDTO } from 'src/dtos/FoodDTO';
import { FOOD_COLLECTION } from './storageConfig';

export async function foodsGetAll() { 
    try {
        const storage = await AsyncStorage.getItem(FOOD_COLLECTION);
        const foods: FoodDTO[] = storage ? JSON.parse(storage) : [];
        return foods;
    } catch (error) {
        throw error;
    }
}