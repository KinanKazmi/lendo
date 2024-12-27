import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacing} from '../theme';

const BackHeading = ({text}: {text: string}) => {
  return (
    <View style={styles.backContainer}>
      <Text style={styles.blackText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    margin: spacing.full,
    alignItems: 'flex-end',
  },
  blackText: {
    fontWeight: 600,
    fontSize: 16,
    color: colors.darkText,
  },
});

export default BackHeading;
