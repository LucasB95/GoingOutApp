import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Logo } from '../../components/Logo';
import { useForm } from '../../hooks/useForm';
import { loginStyles } from '../../theme/loginTheme';


interface Props extends StackScreenProps<any,any>{}

export const RegisterScreens = ({navigation}: Props) => {

  const {email,password,name,onChange} = useForm({
    name: '',
    email: '',
    password:''
  });

  const onRegister = () => {
    console.log({email,password,name});
    Keyboard.dismiss();
  }

  return (
    <>
      <KeyboardAvoidingView
      style={{flex:1, backgroundColor: '#5856D6'}}
      behavior={"height"}
      >
        
        <View style={loginStyles.formContainer}>
          
              <Logo/>

              <Text style={loginStyles.title}> Registro </Text>

              <Text style={ loginStyles.label }>Nombre:</Text>
                    <TextInput 
                        placeholder="Ingrese su nombre:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={loginStyles.inputField}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

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
                        onSubmitEditing={onRegister}

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
                  onSubmitEditing={onRegister}

                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onRegister}
              >
                <Text style={loginStyles.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
              </View>

              {/* <View style={loginStyles.buttonContainer}> */}
              <TouchableOpacity
                        onPress={ () => navigation.replace('LoginScreen') }
                        activeOpacity={ 0.8 }
                        style={ loginStyles.buttonReturn }
                    >
              <Text style={ loginStyles.buttonText  }>Login</Text>
              </TouchableOpacity>

              {/* </View> */}
  
        </View>
      </KeyboardAvoidingView>
    </>
  )
}