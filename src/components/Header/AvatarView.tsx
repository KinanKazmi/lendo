import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../theme';
import Avatar from '../../assets/Avatar.svg';

const NAME = 'Sumayyah Basil';

const AvatarView = () => {
  return (
    <View style={styles.container}>
      <Avatar style={styles.imageArea} />
      <View>
        <Text style={styles.welcomeText}>{'Welcome back!'}</Text>
        <Text style={styles.nameText}>{NAME}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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

export default AvatarView;
