import React, { useContext, useEffect } from 'react'
import { KeyboardAvoidingView, Text,TextInput,TouchableOpacity,View,Keyboard,Alert } from 'react-native';
import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { loginStyles } from '../../theme/loginTheme';
import { useForm } from '../../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/AuthContext';


interface Props extends StackScreenProps<any,any>{}

export const LoginScreens = ({navigation}: Props) => {

  const { signIn, errorMessage, removeError } = useContext( AuthContext );

  const {email,password,onChange} = useForm({
    email: '',
    password:''
  });

  useEffect(() => {
    //if( errorMessage.length === 0 ) return;

    Alert.alert( 'Login incorrecto', errorMessage,[{
        text: 'Ok',
        onPress: removeError
    }]);

}, [ errorMessage ])

  const onLogin = () => {
    console.log({email,password});
    Keyboard.dismiss();
    signIn({ userName: email, userPassword: password, userLanguage: '1' });
  }
  return (
    <>
        <Background/>

      <KeyboardAvoidingView
      style={{flex:1}}
      behavior={"height"}
      >
        
        <View style={loginStyles.formContainer}>
          
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

                  onChangeText={ (value) => onChange(value,"email")}
                  value = {email}
                  onSubmitEditing={onLogin}

                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <Text style={loginStyles.label}> Password: </Text>
              <TextInput
                  placeholder='**********'
                  placeholderTextColor='rgba(255,255,255,0.4)'
                  selectionColor="white"
                  underlineColorAndroid="white"
                  style={loginStyles.inputField}
                  secureTextEntry={true}
                  onChangeText={ (value) => onChange(value,"password")}
                  value = {password}
                  onSubmitEditing={onLogin}

                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onLogin}
              >
                <Text style={loginStyles.buttonText}>Login</Text>
              </TouchableOpacity>
              </View>

              {/* <View style={loginStyles.newUserContainer}> */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={ () => navigation.replace('RegisterScreen') }
                style={ loginStyles.newUserContainer }
              >
                <Text style={loginStyles.buttonText}>Nueva cuenta</Text>
              </TouchableOpacity>
              {/* </View> */}
  
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
