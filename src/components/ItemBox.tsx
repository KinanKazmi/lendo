import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';
import IconContainer from './IconContainer';
import {spacing, colors} from '../theme';
import Spacer from './Spacer';

const ItemBox = ({Icon, text}: {Icon: React.FC<SvgProps>; text: string}) => {
  return (
    <View style={styles.container}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Spacer />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: spacing.borderRadius,
    marginHorizontal: spacing.horizontal,
  },
  textStyle: {
    fontWeight: 600,
    fontSize: 14,
    color: colors.darkText,
  },
});

export default ItemBox;
