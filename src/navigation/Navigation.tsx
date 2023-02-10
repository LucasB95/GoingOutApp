import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreens } from '../screens/Login/LoginScreens';
import { RegisterScreens } from '../screens/Login/RegisterScreens';
import { ProtectedScreens } from '../screens/Login/ProtectedScreens';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown : false,
            cardStyle:{
                backgroundColor: 'white'
            }
        }}  
    >
      <Stack.Screen name="LoginScreen" component={LoginScreens} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreens} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreens} />
    </Stack.Navigator>
  );
}