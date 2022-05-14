import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../app/hooks';

export const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);
  return (
    <View>
      <Text style={styles.title}> {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'green',
    textAlign: 'center',
  },
});
