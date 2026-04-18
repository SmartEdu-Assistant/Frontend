import React, { createContext, useContext, useEffect, useState } from 'react';
import { postAuthLogin, postAuthRegister } from '../api';
import type { LoginRequest, RegisterRequest, AuthResponse, UserResponse } from '../api';

interface AuthContextType {
    user: UserResponse | null;
    accessToken: string | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    hasRole: (role: 'ADMIN' | 'TEACHER') => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};

let memoryAccessToken: string | null = null;
let memoryUser: UserResponse | null = null;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserResponse | null>(memoryUser);
    const [accessToken, setAccessToken] = useState<string | null>(memoryAccessToken);
    const [isLoading, setIsLoading] = useState(true);

    // Синхронизация токена с API-клиентом (вынесен на верхний уровень)
    useEffect(() => {
        const syncToken = async () => {
            const { setGlobalAccessToken, setOnUnauthorized } = await import('../api/config');
            setGlobalAccessToken(accessToken);
            setOnUnauthorized(() => {
                logout();
                window.location.href = '/login';
            });
        };
        syncToken();
    }, [accessToken]); // Зависимость только от accessToken

    // При загрузке приложения
    useEffect(() => {
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        console.log('Login started');
        const response = await postAuthLogin({
            body: { email, password },
        });

        const data = response as AuthResponse;
        console.log('Login response:', data);

        memoryAccessToken = data.access_token;
        memoryUser = data.user;
        setAccessToken(data.access_token);
        setUser(data.user);

        console.log('State updated, isAuthenticated:', !!data.access_token && !!data.user);
    };

    const register = async (data: RegisterRequest) => {
        const response = await postAuthRegister({
            body: data,
        });

        const authData = response as AuthResponse;
        memoryAccessToken = authData.access_token;
        memoryUser = authData.user;
        setAccessToken(authData.access_token);
        setUser(authData.user);
    };

    const logout = () => {
        memoryAccessToken = null;
        memoryUser = null;
        setAccessToken(null);
        setUser(null);
    };

    const hasRole = (role: 'ADMIN' | 'TEACHER') => {
        return user?.role === role;
    };

    const value = {
        user,
        accessToken,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!accessToken && !!user,
        hasRole,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};