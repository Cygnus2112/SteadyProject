import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const BaristaItem = '../components/BaristaItem';

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
    <View>
      {baristaQueue.map((item, idx) => {
        return <BaristaItem item={item} key={idx} />;
      })}
    </View>
  );
};

export default Barista;
