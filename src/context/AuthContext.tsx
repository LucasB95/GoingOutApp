import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoingOutAPI from '../api/GoingOutAPI';
import axios from "axios";

import { Usuario, LoginResponse, LoginData, RegisterData,LoginResponseGoingOut } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        const resp = await GoingOutAPI.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        
        await AsyncStorage.setItem('token', resp.data.token );
        dispatch({ 
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }


    const signIn = async({ userName, userPassword, userLanguage }: LoginData ) => {
    console.log("entro a auth");

        try
        {
            console.log(userName, userPassword, userLanguage );
            const resp = await GoingOutAPI.post<LoginResponseGoingOut>('/Authentication/Login', { userName, userPassword, userLanguage} );
            // axios.post('https://10.0.0.2:7200/api/Authentication/Login',{
            //     userName, userPassword, userLanguage
            //   })
            //   .then(response => {
            //     console.log(response.data)
            //   })
            //   .catch(error => console.log(error));
            
            console.log("processs" );
            console.log("process" + resp);

        }catch(error)
        {
            console.log({error});
        }

           

        /*try {
         
            const  {data}  = await GoingOutAPI.post<LoginResponse>('/Authentication/Login', { correo, password } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error : any) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
        */
        console.log("salio a auth");
    };
    
    const signUp = async( { nombre, correo, password }: RegisterData ) => {

        try {
         
            const { data } = await GoingOutAPI.post<LoginResponse>('/usuarios', { correo, password, nombre } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error : any) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.errors[0].msg || 'Revise la información'
            });
        }

    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}


