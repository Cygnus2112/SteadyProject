import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import MenuItem from '../components/MenuItem';

const Menu = () => {
  const dispatch = useDispatch();
  const orderDrink = (drink, prepTime) => {
    dispatch({
      type: 'CREATE_DRINK_SUCCESS',
      drink: {
        drink,
        prepTime,
      }
    });
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <MenuItem item={'Cafe Au Lait'} orderDrink={() => orderDrink('cafeaulait', 4000)} />
      <MenuItem item={'Cappuccino'} orderDrink={() => orderDrink('cappuccino', 10000)} />
      <MenuItem item={'Expresso'} orderDrink={() => orderDrink('expresso', 15000)} />
    </View>
  );
};

export default Menu;
