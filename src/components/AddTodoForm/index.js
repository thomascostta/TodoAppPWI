import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';

import Input from '../../common/Input';
import Touchable from '../../common/Touchable';
import {addTodo} from '../../redux/todoSlice';
const {width} = Dimensions.get('window');

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const onSubmit = () => {
    dispatch(
      addTodo({
        title: value,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          styleTextInput={styles.input}
          placeholder="Minha tarefa..."
          onChangeText={setValue}
          value={value}
        />
      </View>
      <View>
        <Touchable
          TextTouchable="Adicionar"
          onPress={onSubmit}
          styleTouchable={styles.touchable}
          styleTextTouchable={styles.textTouchable}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: width / 1.6,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginRight: 20,
    color: '#000000',
  },
  touchable: {
    height: 40,
    width: width / 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#537fed',
  },
  textTouchable: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default AddTodoForm;
