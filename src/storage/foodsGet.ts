import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodByDateDTO } from 'src/dtos/FoodByDateDTO';
//import { FoodDTO } from 'src/dtos/FoodDTO';
import { FOOD_COLLECTION } from './storageConfig';

export async function foodsGet() { 
    try {
        const storage = await AsyncStorage.getItem(FOOD_COLLECTION);
        const foods: FoodByDateDTO[] = storage ? JSON.parse(storage) : [];
        return foods;
    } catch (error) {
        throw error;
    }
}