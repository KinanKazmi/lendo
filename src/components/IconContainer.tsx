import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, spacing} from '../theme';

const IconContainer = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing.iconCircle,
    height: spacing.iconCircle,
    borderRadius: spacing.iconCircle,
    backgroundColor: colors.bgWhite,
  },
});

export default IconContainer;
