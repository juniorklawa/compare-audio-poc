/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, View} from 'react-native';
import CompareButton from './src/components/ComparePlay';
import VocabPlay from './src/components/VocabPlay';

const audioUrl1 =
  'https://online.wiseup.com/storage/media/answers-feedback-audio/AIR_PT_1.4_01.mp3';

const audioUrl2 =
  'https://online.wiseup.com/storage/media/answers-feedback-audio/AIR_PT_1.4_02.mp3';

const audioUrl3 =
  'https://online.wiseup.com/storage/media/answers-feedback-audio/AIR_PT_1.4_03.mp3';

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <VocabPlay title={'AUDIO 1'} audioUrl={audioUrl1} />

      <VocabPlay title={'AUDIO 2'} audioUrl={audioUrl2} />

      <VocabPlay title={'AUDIO 3'} audioUrl={audioUrl3} />

      <Button
        onPress={() => navigation.navigate('Speaking')}
        title="Ir para speaking"
      />
    </View>
  );
};

const Speaking = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <VocabPlay title={'AUDIO SIMPLES'} audioUrl={audioUrl3} />

      <CompareButton title={'Comparar'} audioName={'whistle'} />
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Speaking" component={Speaking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
