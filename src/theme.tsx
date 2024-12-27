import {Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export {screenWidth, screenHeight};

export const colors = {
  bgBlue: '#2DA5FE',
  bgWhite: '#F5F9FC',
  iconBlue: '#2C8BFD',
  greyText: '#787381',
  darkText: '#190044',
  white: '#FFF',
  greyBorder: '#EDECEE',
};

export const spacing = {
  horizontal: 20,
  vertical: 20,
  full: 20,
  borderRadius: 20,
  iconCircle: 60,
};
