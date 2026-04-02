import { client } from './client.gen';

client.setConfig({
    baseUrl: '/api/v1', 
});

client.interceptors.request.use((request) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        request.headers.set('Authorization', `Bearer ${token}`);
    }    
    return request;
});