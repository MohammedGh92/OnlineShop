import AsyncStorage from '@react-native-async-storage/async-storage';

export default class user {

    static userObj = null;

    static async loadData() {
        this.userObj = JSON.parse(await AsyncStorage.getItem('user'));
    }

    static async saveData(user) {
        this.userObj = user;
        await AsyncStorage.setItem('user', JSON.stringify(this.userObj))
    }

    static async saveDataObj(newUserObj) {
        this.userObj = newUserObj;
        await AsyncStorage.setItem('user', JSON.stringify(this.userObj))
    }

    static async removeUser() {
        await AsyncStorage.removeItem('user')
    }
}