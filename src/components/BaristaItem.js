import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';

const BaristaItem = ({item}) => {
  return (
    <View style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
     item
      </Text>
    </View>
  )
}

export default BaristaItem;
