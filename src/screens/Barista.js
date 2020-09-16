import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, ScrollView, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Barista = () => {
  const dispatch = useDispatch();
  const baristaQueue = useSelector(state => state.baristaQueue);

  useEffect(() => {
    if (baristaQueue.length) {
      const item = baristaQueue[0];
      setTimeout(() => {
        dispatch({ type: 'UPDATE_DRINK_QUEUE' });
      }, item.prepTime);
    }
  }, [baristaQueue, dispatch]);

  return (
    <ScrollView>
      {baristaQueue.map((item, idx) => {
        return (
          <View key={idx} style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              { item.drink }
            </Text>
          </View>
        )
      })}
    </ScrollView>
  );
};

export default Barista;
