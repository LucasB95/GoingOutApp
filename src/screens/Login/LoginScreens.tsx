import React from 'react'
import { Text,TextInput,TouchableOpacity,View } from 'react-native';
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
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Text style={loginStyles.label}> Password: </Text>
        <TextInput
            placeholder='Ingrese su contraseña:'
            placeholderTextColor='rgba(255,255,255,0.4)'
            selectionColor="white"
            underlineColorAndroid="white"
            style={loginStyles.inputField}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <View style={loginStyles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={loginStyles.button}
        >
          <Text style={loginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>

    </>
  )
}
