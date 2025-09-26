// utils/storage.ts
import { CartState } from '@/utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCart = async (key: string, cart: CartState) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

export const loadCart = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error('Error loading cart:', error);
    return null;
  }
};

export const clearCartStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
};
