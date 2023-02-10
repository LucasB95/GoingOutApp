import React from 'react'
import { Text,TextInput } from 'react-native';
// import { View,Text } from 'react-native';
import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { loginStyles } from '../../theme/loginTheme';

export const LoginScreens = () => {
  return (
    <>
        <Background/>
        <Logo/>

        <Text style={loginStyles.title}> Login </Text>

        <Text style={loginStyles.label}> Email: </Text>

        <TextInput
            placeholder='Ingrese su email:'
            placeholderTextColor='rgba(255,255,255,0.4)'
            keyboardType='email-address'
            selectionColor="white"
            underlineColorAndroid="white"
            style={loginStyles.inputField}
        />

    </>
  )
}
