import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme';
import Spacer from '../Spacer';

const details = {
  loans: '60',
  principle: '1,000,000',
  profit: '100,000',
};

const RenderDetail = ({label, value}: {label: string; value: string}) => {
  return (
    <View>
      <Text style={styles.greyText}>{label}</Text>
      <Spacer space={3} />
      <Text style={styles.blackText}>{value}</Text>
    </View>
  );
};

const Details = () => {
  return (
    <View style={styles.container}>
      <RenderDetail label="O/S Loans" value={`${details.loans} Loans`} />
      <RenderDetail label="O/S Principle" value={`${details.principle} SAR`} />
      <RenderDetail label="Exp. Profit" value={`${details.profit} SAR`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greyText: {
    fontWeight: 400,
    fontSize: 14,
    color: colors.greyText,
  },
  blackText: {
    fontWeight: 600,
    fontSize: 16,
    color: colors.darkText,
  },
});

export default Details;
