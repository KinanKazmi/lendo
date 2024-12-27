import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, spacing} from '../../theme';
import IconContainer from '../IconContainer';
import Spacer from '../Spacer';
import Wallet from '../../assets/Wallet.svg';

const AMOUNT = '1,540,680.12';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View style={styles.horizontalRow}>
          <IconContainer>
            <Wallet />
          </IconContainer>
          <Spacer horizontal />
          <View style={styles.textArea}>
            <Text style={styles.greyText}>{'Wallet Balance'}</Text>
            <Text style={styles.blackText}>{`${AMOUNT} SAR`}</Text>
          </View>
        </View>
        <Text style={[styles.blackText, styles.largeText]}>{'+'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.greyBorder,
    height: '20%',
  },
  containerInner: {
    flex: 1,
    flexDirection: 'row',
    margin: spacing.horizontal,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalRow: {
    flexDirection: 'row',
  },
  textArea: {
    justifyContent: 'center',
  },
  greyText: {
    fontWeight: 400,
    fontSize: 14,
    color: colors.greyText,
    textAlign: 'right',
  },
  blackText: {
    fontWeight: 600,
    fontSize: 16,
    color: colors.darkText,
    textAlign: 'left',
  },
  largeText: {
    fontWeight: 500,
    fontSize: 20,
  },
});

export default Footer;
