
import AsyncStorage from '@react-native-async-storage/async-storage';

type LocalStorageProps = {
    storageKey: StorageKeys;
    value?: any;
}

const storageKeys = [
    "@tasks",
    "@id",
] as const;
type StorageKeys = typeof storageKeys[number];

const storeData = async (value: any, key: StorageKeys) => {
    console.log("STORE");
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log('storeData -> ' + e);
    }
}

const getData = async (key: StorageKeys) => {
    console.log("GET");
    try {
        const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('getData -> ' + e);
    }
}

const removeValue = async (id: StorageKeys) => {
    try {
      await AsyncStorage.removeItem(id);
    } catch(e) {
        console.log('removeValue -> ' + e);
    }
  }

export const localStorage = {
    storeData, getData, removeValue
}