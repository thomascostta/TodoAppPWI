import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const TotalItems = () => {
  const completedItems = useSelector(state => state.todos?.list);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Total de itens: </Text>
      </View>
      <View>
        <Text style={styles.text}>{completedItems.length}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
});

export default TotalItems;
