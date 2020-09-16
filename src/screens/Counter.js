import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counterItems = useSelector(state => state.counterItems);

  useEffect(() => {
    if (counterItems.length) {
      setTimeout(() => {
        dispatch({ type: 'UPDATE_COUNTER' });
      }, 3000);
    }
  }, [counterItems, dispatch]);

  return (
    <ScrollView>
      {counterItems.map((item, idx) => {
        return (
          <View key={idx} style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              { item.drink }
            </Text>
          </View>
        );
      })}
    </ScrollView>
  )
}

export default Counter;
