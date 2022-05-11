import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';

const Input = ({
  styleContainer,
  styleTextInput,
  onChangeText,
  value,
  placeholder,
}) => {
  const ref = useRef();

  return (
    <View style={styleContainer}>
      <TextInput
        ref={ref}
        style={styleTextInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
