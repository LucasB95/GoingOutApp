import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreens } from '../screens/Login/LoginScreens';
import { RegisterScreens } from '../screens/Login/RegisterScreens';
import { ProtectedScreens } from '../screens/Login/ProtectedScreens';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/Login/LoadingScreen';

const Stack = createStackNavigator();

export const Navigation = () => {

  const { status } = useContext( AuthContext);

  if ( status === 'checking' ) return <LoadingScreen />
console.log(status);
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown : false,
            cardStyle:{
                backgroundColor: 'white'
            }
        }}  
    >

{
        (status !== 'authenticated') 
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={ LoginScreens } />
              <Stack.Screen name="RegisterScreens" component={ RegisterScreens } />
            </>
          )
          : (
            <Stack.Screen name="ProtectedScreen" component={ProtectedScreens} />
          )
      }      
      
    </Stack.Navigator>
  );
}