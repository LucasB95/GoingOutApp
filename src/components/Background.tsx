import React from 'react';
import { View } from 'react-native';

export const Background = () => {
  return (
    <View
        style={{
            position: 'absolute',
            backgroundColor: '#5856D6',
            top:-205,
            width: 1000,
            height: 1150,
            transform:[
                {rotate:'-70deg'}
            ]
        }}
    />
  )
}
