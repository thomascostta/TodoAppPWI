import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../../redux/todoSlice';

const RemoveTodoForm = ({id}) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeTodo({id: id}));
  };

  return (
    <TouchableOpacity
      onPress={handleDeleteClick}
      style={styles.container}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <Icon name="remove-circle-outline" solid size={26} color={'#D62828'} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

export default RemoveTodoForm;
