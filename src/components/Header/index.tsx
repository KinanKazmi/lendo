import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors, screenWidth, spacing} from '../../theme';
import AvatarView from './AvatarView';
import Bell from '../../assets/Bell.svg';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.internalContainer}>
        <View style={styles.profileRow}>
          <AvatarView />
          <Bell />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgBlue,
    width: screenWidth,
    height: '20%',
    borderBottomStartRadius: spacing.borderRadius,
    borderBottomEndRadius: spacing.borderRadius,
  },
  internalContainer: {
    flex: 1,
    padding: spacing.full,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
