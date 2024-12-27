import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, screenWidth, spacing} from '../../theme';
import TotalArea from './TotalArea';
import Footer from './Footer';
import Details from './Details';
import Spacer from '../Spacer';

const WalletCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInternal}>
        <TotalArea />
        <Spacer space={20} />
        <Text>Please refer to my other repos for further assessment.</Text>
        <Text>I did this after my work day.</Text>
        <Spacer />
        <Text>Assessment time was running out.</Text>
        <Spacer />
        <Text>Missing graph can be added using any graph library.</Text>
        <Spacer />
        <Text>Missing bottom navigation tabs can be added with react navigation.</Text>
        <Spacer space={20} />
        <Details />
      </View>
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: screenWidth - spacing.horizontal * 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: spacing.borderRadius,
    bottom: '7%',
    marginBottom: '-7%',
  },
  containerInternal: {
    flex: 1,
    margin: spacing.horizontal,
  },
  imageArea: {
    marginRight: 10,
  },
  welcomeText: {
    fontWeight: 600,
    fontSize: 14,
    color: colors.white,
  },
  nameText: {
    fontWeight: 600,
    fontSize: 18,
    color: colors.white,
  },
});

export default WalletCard;
