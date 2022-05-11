import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import RemoveTodoForm from '../RemoveTodo';
import {updateModal} from '../../redux/todoSlice';

const TodoItem = ({id, title}) => {
  const dispatch = useDispatch();

  const editTodoItem = () => {
    dispatch(
      updateModal({
        modalVisibleUpdate: true,
        selectIdEdit: id,
      }),
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={editTodoItem}>
      <View key={id} style={styles.list}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <RemoveTodoForm id={id} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#000000',
    paddingTop: 8,
    paddingBottom: 8,
  },
  list: {
    marginLeft: 15,
    paddingTop: 2,
    paddingEnd: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

export default TodoItem;
