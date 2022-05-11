import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './Header';
import TodoList from '../../components/TodoList';
import TotalItems from '../../components/TotalItems';
import ModalUpdate from '../../components/ModalUpdate';
import AddTodoForm from '../../components/AddTodoForm';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AddTodoForm />
      <TodoList />
      <TotalItems />
      <ModalUpdate />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Home;
