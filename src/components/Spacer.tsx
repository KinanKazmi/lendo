import React from 'react';
import {View} from 'react-native';

const Spacer = ({
  space = 5,
  horizontal,
}: {
  space?: number;
  horizontal?: boolean;
}) => {
  return (
    <View
      style={horizontal ? {marginHorizontal: space} : {marginVertical: space}}
    />
  );
};

export default Spacer;
