import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counterItems = useSelector(state => state.counterItems);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, textAlign: 'center', borderBottomColor: 'black', paddingVertical: 15, borderBottomWidth: 2}}>
        Counter
      </Text>
      <ScrollView>
        {counterItems.map((item, idx) => {
          return item.drink ? (
            <View key={idx} style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center'}}>
              <Text>
                { item.drink }
              </Text>
            </View>
          ) : null;
        })}
      </ScrollView>
    </View>

  )
}

export default Counter;
