/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider, useSelector } from 'react-redux';

import MenuScreen from './src/screens/Menu';
import BaristaScreen from './src/screens/Barista';
import CounterScreen from './src/screens/Counter';

import reducer from './src/reducers/reducer';
import rootSaga from './src/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const baristaQueue = useSelector(state => state.baristaQueue);
  const counterItems = useSelector(state => state.counterItems);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen
        name="Barista"
        component={BaristaScreen}
        options={{tabBarIcon:() => <View><Text style={{fontSize: 20}}>{ baristaQueue.length }</Text></View>}}
      />
      <Tab.Screen
        name="Counter"
        component={CounterScreen}
        options={{tabBarIcon:() => <View><Text style={{fontSize: 20}}>{ counterItems.length }</Text></View>}}
      />
    </Tab.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
