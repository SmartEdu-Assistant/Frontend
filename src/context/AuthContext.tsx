import React, { createContext, useContext, useMemo, useState } from 'react';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    hasRole: (role: 'ADMIN' | 'TEACHER') => boolean;
}

type UserRole = 'ADMIN' | 'TEACHER';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: UserRole;
}

interface RegisterRequest {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: UserRole;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};

const DEMO_USERS: Array<User & { password: string }> = [
    {
        id: 'teacher-1',
        first_name: 'Анна',
        last_name: 'Иванова',
        email: 'teacher@smartedu.local',
        role: 'TEACHER',
        password: 'teacher123',
    },
    {
        id: 'admin-1',
        first_name: 'Сергей',
        last_name: 'Петров',
        email: 'admin@smartedu.local',
        role: 'ADMIN',
        password: 'admin123',
    },
];

const SESSION_KEY = 'smartedu-auth-user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const initialUser = useMemo(() => {
        const rawUser = window.localStorage.getItem(SESSION_KEY);
        if (!rawUser) return null;
        try {
            return JSON.parse(rawUser) as User;
        } catch (_error) {
            return null;
        }
    }, []);
    const [user, setUser] = useState<User | null>(initialUser);
    const [isLoading] = useState(false);

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
        const createdUser: User = {
            id: `local-${Date.now().toString()}`,
            email: data.email.trim().toLowerCase(),
            first_name: data.first_name,
            last_name: data.last_name,
            role: data.role,
        };
        setUser(createdUser);
        window.localStorage.setItem(SESSION_KEY, JSON.stringify(createdUser));
    };

    const logout = () => {
        setUser(null);
        window.localStorage.removeItem(SESSION_KEY);
    };

    const hasRole = (role: 'ADMIN' | 'TEACHER') => {
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