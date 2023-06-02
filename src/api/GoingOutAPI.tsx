import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL1 = 'https://localhost:7200/api';
const baseURL2 = 'https://10.0.0.2:7200/api';
const baseURL3 = 'https://10.0.2.2:7200/api';

const GoingOutAPI = axios.create({ baseURL: baseURL3 });

GoingOutAPI.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            //config.headers['x-token'] = token;
            config.headers['dbkey'] = '1';
            console.log("token");
        }
        else{
            config.headers['SecretKey'] = 'df7baef36b029e0450133eea8aefb3deb2fd759ebfa1f810c12734e0b158841b';
            config.headers['dbkey'] = '1';
            console.log("config");
        }
        return config;
    }

   
);

//console.log('prueba'+GoingOutAPI);

export default GoingOutAPI;
