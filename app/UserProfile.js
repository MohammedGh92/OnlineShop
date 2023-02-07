import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
export default class UserProfile {
  static myInstance = null;
  _userID = '';
  user_name = 'Geust';
  PhotoLink = 'https://ictsolutionsgroup.com/ReactFiles/user.png';

  constructor() {
    this.user_name = I18nManager.isRTL ? 'زائر' : 'Geust';
  }

  static getInstance() {
    if (UserProfile.myInstance === null) {
      UserProfile.myInstance = new UserProfile();
    }

    return this.myInstance;
  }

  getUserID() {
    return this._userID;
  }

  getUserName() {
    return this.user_name;
  }
  getUserPhotoLink() {
    return this.PhotoLink;
  }

  ClearData() {
    console.log('ClearData');
    this._userID = '';
    this.user_name = I18nManager.isRTL ? 'زائر' : 'Geust';
    this.SocialLogin = '';
    this.PhotoLink = 'https://ictsolutionsgroup.com/ReactFiles/user.png';
    AsyncStorage.clear();
  }

  ClearDataWithoutRemovingStorage() {
    console.log('ClearDataWithoutRemovingStorage');
    this._userID = '';
    this.user_name = '';
    this.SocialLogin = '';
    this.PhotoLink = 'https://ictsolutionsgroup.com/ReactFiles/user.png';
  }

  SetFakeDataForTest() {
    console.log('SetFakeDataForTest');
    this._userID = '1';
    this.user_name = 'Test';
    this.SocialLogin = 'no';
    this.PhotoLink = 'https://ictsolutionsgroup.com/ReactFiles/user.jpg';
    AsyncStorage.setItem('user_id', '' + this._userID);
    AsyncStorage.setItem('user_name', '' + this.user_name);
    AsyncStorage.setItem('user_photo', '' + this.PhotoLink);
  }

  SetThisUserData(ID, Name, Photo) {
    console.log('SetThisUserData');
    this._userID = ID;
    this.user_name = Name;
    if (Photo.length > 3) this.PhotoLink = Photo;
  }

  SaveThisUserData = async (ID, Name, Photo) => {
    console.log('SaveThisUserData');
    try {
      await AsyncStorage.setItem('user_id', '' + ID);
      await AsyncStorage.setItem('user_name', Name);
      await AsyncStorage.setItem('user_photo', Photo);
      this.SetThisUserData(ID, Name, Photo);
    } catch (e) {
      console.log('Error:' + e.message);
    }
  };

  HaveAccount() {
    return this._userID.length > 0;
  }
}
