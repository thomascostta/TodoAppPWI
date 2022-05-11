import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import TodoItem from '../TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.list);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {todos.map(todo => (
          <TodoItem id={todo.id} title={todo.title} key={todo.id.toString()} />
        ))}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 5,
    marginHorizontal: 20,
  },
  scrollView: {
    marginTop: 40,
  },
});

export default TodoList;
