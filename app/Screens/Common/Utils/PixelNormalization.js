import {View,Dimensions, Platform, PixelRatio,Text} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
// based on iPhone 11 Pro
const scale = ScreenWidth / 375;
export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
