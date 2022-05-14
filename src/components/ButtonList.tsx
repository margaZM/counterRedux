import React from 'react';
import {View} from 'react-native';
import {ButtonCounter} from './ButtonCounter';
import {increment, decrement} from '../slices/counter/counterSlice';
import {useAppDispatch} from '../app/hooks';

export const ButtonList = () => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <ButtonCounter title="Increment" onPress={() => dispatch(increment())} />
      <ButtonCounter title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};
