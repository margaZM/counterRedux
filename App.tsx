import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Counter} from './src/components/Counter';
import {ButtonList} from './src/components/ButtonList';
// import {ButtonCounter} from './src/components/ButtonCounter';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={styles.title}> Counter </Text>
            <Counter />
            <ButtonList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default App;
