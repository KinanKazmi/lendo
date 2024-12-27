import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {colors} from './src/theme';
import Header from './src/components/Header';
import WalletCard from './src/components/WalletCard';
import BackHeading from './src/components/BackHeading';
import FeatureList from './src/components/FeatureList';


function App(): React.JSX.Element {
  return (
    <View style={styles.containerStyle}>
      <StatusBar backgroundColor={colors.bgBlue} barStyle={'light-content'} />
      <Header />
      <View style={styles.mainView}>
        <WalletCard />
        <BackHeading text="Explore Lendo Features!" />
        <FeatureList />
        <BackHeading text="Top Funds in focus" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
});

export default App;
