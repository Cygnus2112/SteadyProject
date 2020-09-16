import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';

const MenuItem = ({ item, orderDrink }) => {
  return (
    <TouchableOpacity style={{marginTop: 20}} onPress={orderDrink}>
      <View style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 15}}>
        <Text>
          { item }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
