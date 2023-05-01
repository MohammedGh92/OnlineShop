import React from 'react';
import { Dimensions, View, ScrollView, Alert } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
import { AppRoundedImage, AppTextInput, AppTopBar, AppText, AppBTN, AppBottomBar } from '../Common/';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import user from '../../user';
import firestore from '@react-native-firebase/firestore';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: user.userObj.firstName,
      lastName: user.userObj.lastName,
      phone: user.userObj.phone,
      email: user.userObj.email,
      loading: false
    }
    this.submitfirstName = this.submitfirstName.bind(this);
    this.submitlastName = this.submitlastName.bind(this);
    this.submitPhone = this.submitPhone.bind(this);
  }

  saveClicked() {
    this.saveUserDataFireStore();
  }

  async saveUserDataFireStore() {
    this.setState({ loading: true })
    const {
      firstName,
      lastName,
      phone,
      email
    } = this.state;

    await firestore()
      .collection('users')
      .doc(email)
      .set({
        firstName: '' + firstName,
        lastName: '' + lastName,
        phone: '' + phone
      })
      .then(() => {
        console.log('User added!');
        this.saveUserDataLocally();
        this.setState({ loading: false })
      });
  }

  async saveUserDataLocally() {
    const {
      firstName,
      lastName,
      phone
    } = this.state;
    const userSavedAcc = user.userObj;
    userSavedAcc.firstName = firstName;
    userSavedAcc.lastName = lastName;
    userSavedAcc.phone = phone;
    await user.saveData(userSavedAcc);
    Alert.alert('Your info saved successfully!');
  }

  submitfirstName(firstName) { this.setState({ firstName: firstName }); }
  submitlastName(lastName) { this.setState({ lastName: lastName }) }
  submitPhone(phone) { this.setState({ phone: phone }) }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      loading
    } = this.state;

    return (
      <View>
        <ScrollView>
          <View style={{
            alignItems: 'center',
            flexDirection: 'column',
            height: heightPixel(787), width: ScreenWidth
          }}>
            <AppTopBar />
            <AppRoundedImage marginTop={30} width={110} height={115} />
            <AppTextInput marginTop={35} name={'account'} placeholder={'First name'} defaultValue={firstName} onEndEditing={this.submitfirstName} />
            <AppTextInput marginTop={10} name={'account'} placeholder={'Last name'} defaultValue={lastName} onEndEditing={this.submitlastName} />
            <AppTextInput marginTop={10} name={'cellphone'} text={1} onEndEditing={this.submitPhone} keyboardType={'numeric'} placeholder={'Phone'} defaultValue={phone} />
            <AppTextInput editable={false} marginTop={10} defaultValue={email} />
            <AppBTN text={'Save'} marginTop={160} onPress={() => this.saveClicked()} loading={loading} />
          </View>
        </ScrollView>
        <AppBottomBar choosed={4} />
      </View>
    );
  }
}

export default Profile;