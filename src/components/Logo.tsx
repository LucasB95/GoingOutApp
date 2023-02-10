import React from 'react'
import { Image, View } from 'react-native';

export const Logo = () => {
  return (
    <View
    style={{
        alignItems:'center',        
    }}
    >
       <Image
        source={require('../assets/Logo-Softnova.png')}
        style={{
            width:150,
            height:200
        }}
       />
    </View>
  )
}
