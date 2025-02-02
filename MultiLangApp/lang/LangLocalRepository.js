import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LangLocalRepository {
  tableName() {
    return 'lang';
  }

  async get() {
    const data = await AsyncStorage.getItem(this.tableName());
    return data ? JSON.parse(data) : null;
  }

  async set(data) {
    return AsyncStorage.setItem(this.tableName(), JSON.stringify(data));
  }

  async removeAll() {
    return AsyncStorage.removeItem(this.tableName());
  }
}