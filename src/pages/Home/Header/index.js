import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista To do</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: height / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '900',
    color: '#000000',
  },
});

export default Header;
