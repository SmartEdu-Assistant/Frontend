import React, { createContext, useContext, useEffect, useState } from 'react';
import { RegisterRequest, UserResponse } from '../api/types.gen';

interface AuthContextType {
    user: UserResponse | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    hasRole: (role: 'ADMIN' | 'TEACHER') => boolean;
}

type UserRole = UserResponse['role'];

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};

const DEMO_USERS: Array<UserResponse & { password: string }> = [
    {
        id: 1,
        first_name: 'Анна',
        last_name: 'Иванова',
        email: 'teacher@smartedu.local',
        role: 'TEACHER',
        status: 'ACTIVE',
        created_at: new Date().toISOString(),
        password: 'teacher123',
    },
    {
        id: 2,
        first_name: 'Сергей',
        last_name: 'Петров',
        email: 'admin@smartedu.local',
        role: 'ADMIN',
        status: 'ACTIVE',
        created_at: new Date().toISOString(),
        password: 'admin123',
    },
];

const SESSION_KEY = 'smartedu-auth-user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const rawUser = window.localStorage.getItem(SESSION_KEY);
        if (!rawUser) {
            setIsLoading(false);
            return;
        }

        try {
            setUser(JSON.parse(rawUser) as UserResponse);
        } catch (_error) {
            window.localStorage.removeItem(SESSION_KEY);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const foundUser = DEMO_USERS.find(
            (demoUser) => demoUser.email === email.trim().toLowerCase() && demoUser.password === password,
        );

        if (!foundUser) {
            throw new Error('Неверный email или пароль. Демо-аккаунты: teacher@smartedu.local / admin@smartedu.local');
        }

        const { password: _password, ...userData } = foundUser;
        setUser(userData);
        window.localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
    };

    const register = async (data: RegisterRequest) => {
        const createdUser: UserResponse = {
            id: Date.now(),
            email: data.email.trim().toLowerCase(),
            first_name: data.first_name,
            last_name: data.last_name,
            role: data.role,
            status: 'ACTIVE',
            created_at: new Date().toISOString(),
        };
        setUser(createdUser);
        window.localStorage.setItem(SESSION_KEY, JSON.stringify(createdUser));
    };

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem(SESSION_KEY);
    };

    const hasRole = (role: UserRole) => {
        return user?.role === role;
    };

    const value = {
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        hasRole,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};