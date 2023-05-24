import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://localhost:7200/api';

const GoingOutAPI = axios.create({ baseURL: 'https://10.0.0.2:7200/api' });

//const GoingOutAPI = axios.create({ baseURL });

GoingOutAPI.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            //config.headers['x-token'] = token;
            config.headers['dbkey'] = '1';
        }
        else{
            config.headers['SecretKey'] = 'df7baef36b029e0450133eea8aefb3deb2fd759ebfa1f810c12734e0b158841b';
            config.headers['dbkey'] = '1';
        }
        return config;
    }
);

//console.log('prueba'+GoingOutAPI);

export default GoingOutAPI;
