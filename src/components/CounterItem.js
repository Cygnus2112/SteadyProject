import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';

const CounterItem = () => {
  return (
    <View style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        COUNTER ITEM
      </Text>
    </View>
  )
}

export default CounterItem;
