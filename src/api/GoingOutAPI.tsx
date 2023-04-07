// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseURL = 'https://localhost:7200/api';

// const GoingOutAPI = axios.create({ baseURL });

// GoingOutAPI.interceptors.request.use(
//     async(config) => {
//         const token = await AsyncStorage.getItem('token');
//         if ( token ) {
//             config.headers['x-token'] = token;
//         }
//         return config;
//     }
// );



// export default GoingOutAPI;
