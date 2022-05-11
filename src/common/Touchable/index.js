import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Touchable = ({
  styleTouchable,
  onPress,
  styleTextTouchable,
  TextTouchable,
}) => {
  return (
    <View>
      <TouchableOpacity style={styleTouchable} onPress={onPress}>
        <Text style={styleTextTouchable}>{TextTouchable}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touchable;
