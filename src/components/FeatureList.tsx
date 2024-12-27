import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ItemBox from './ItemBox';
import Rocket from '../assets/Rocket.svg';
import Gift from '../assets/Gift.svg';
import Coins from '../assets/Coins.svg';

const features = [
  {name: 'Auto Invest', icon: Rocket},
  {name: 'Referral', icon: Gift},
  {name: 'Deal Room', icon: Coins},
];

const FeatureList = () => {
  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.content}>
      {features.map(feature => (
        <ItemBox key={feature.name} Icon={feature.icon} text={feature.name} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: '15%',
  },
  content: {
    alignItems: 'center',
  },
});

export default FeatureList;
