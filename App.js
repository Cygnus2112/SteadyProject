/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import MenuScreen from './src/screens/Menu';
import BaristaScreen from './src/screens/Barista';
import CounterScreen from './src/screens/Counter';

import reducer from './src/reducers/reducer';
import rootSaga from './src/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const Tab = createBottomTabNavigator();


const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Barista" component={BaristaScreen} />
            <Tab.Screen name="Counter" component={CounterScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
