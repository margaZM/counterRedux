import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IButtonCounter {
  title: string;
  onPress: () => void;
}

export const ButtonCounter = ({title, onPress}: IButtonCounter) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29938d',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
  },
});
