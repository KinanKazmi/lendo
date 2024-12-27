import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../theme';
import Spacer from '../Spacer';
import CircleQuestion from '../../assets/CircleQuestion.svg';
import ArrowRight from '../../assets/ArrowRight.svg';
import Hidden from '../../assets/Hidden.svg';

const AMOUNT = '1,100,000';

const TotalArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftArea}>
        <View style={styles.horizontalRow}>
          <Text style={styles.greyText}>Portfolio Value</Text>
          <Spacer horizontal />
          <CircleQuestion />
        </View>
        <Spacer />
        <View style={styles.horizontalRow}>
          <Text style={styles.blackText}>
            {`${AMOUNT}.`}
            <Text style={[styles.blackText, styles.textSmall]}>{'00 SAR'}</Text>
          </Text>
          <Spacer horizontal />
          <Hidden />
        </View>
      </View>
      <TouchableOpacity style={styles.rightArea}>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftArea: {
    flex: 4,
  },
  rightArea: {
    flex: 1,
    alignItems: 'flex-end',
  },
  horizontalRow: {
    flexDirection: 'row',
  },
  greyText: {
    fontWeight: 400,
    fontSize: 14,
    color: colors.greyText,
  },
  blackText: {
    fontWeight: 600,
    fontSize: 18,
    color: colors.darkText,
  },
  textSmall: {
    fontSize: 14,
  },
});

export default TotalArea;
