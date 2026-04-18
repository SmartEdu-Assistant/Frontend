import { client } from './client.gen';

let globalAccessToken: string | null = null;

export const setGlobalAccessToken = (token: string | null) => {
    globalAccessToken = token;
};

export const getGlobalAccessToken = () => globalAccessToken;

client.setConfig({
    baseUrl: '/api/v1',
});

client.interceptors.request.use((request) => {
    const token = getGlobalAccessToken();
    if (token) {
        request.headers.set('Authorization', `Bearer ${token}`);
    }
    return request;
});

let onUnauthorizedCallback: (() => void) | null = null;

export const setOnUnauthorized = (callback: () => void) => {
    onUnauthorizedCallback = callback;
};

client.interceptors.response.use(async (response) => {
    if (response.status === 401) {
        onUnauthorizedCallback?.();
    }
    return response;
});