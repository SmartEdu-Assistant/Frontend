import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    Paper,
    Link,
    CircularProgress,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        role: 'TEACHER' as 'ADMIN' | 'TEACHER',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const name = e.target.name as string;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Очищаем ошибку поля при изменении
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!formData.email) {
            errors.email = 'Email обязателен';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Некорректный email';
        }
        if (!formData.password) {
            errors.password = 'Пароль обязателен';
        } else if (formData.password.length < 6) {
            errors.password = 'Пароль должен быть не менее 6 символов';
        }
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Пароли не совпадают';
        }
        if (!formData.first_name) {
            errors.first_name = 'Имя обязательно';
        }
        if (!formData.last_name) {
            errors.last_name = 'Фамилия обязательна';
        }
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!validate()) {
            return;
        }

        setIsLoading(true);

        try {
            await register({
                email: formData.email,
                password: formData.password,
                first_name: formData.first_name,
                last_name: formData.last_name,
                role: formData.role,
            });
            navigate('/');
        } catch (err: any) {
            console.error('Register error:', err);
            if (err?.error?.message) {
                setError(err.error.message);
            } else if (err?.message) {
                setError(err.message);
            } else {
                setError('Ошибка регистрации. Попробуйте другой email.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                            {error}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="Имя"
                            name="first_name"
                            autoComplete="given-name"
                            autoFocus
                            value={formData.first_name}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={!!fieldErrors.first_name}
                            helperText={fieldErrors.first_name}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="last_name"
                            label="Фамилия"
                            name="last_name"
                            autoComplete="family-name"
                            value={formData.last_name}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={!!fieldErrors.last_name}
                            helperText={fieldErrors.last_name}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={!!fieldErrors.email}
                            helperText={fieldErrors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={!!fieldErrors.password}
                            helperText={fieldErrors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Подтверждение пароля"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            autoComplete="new-password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            disabled={isLoading}
                            error={!!fieldErrors.confirmPassword}
                            helperText={fieldErrors.confirmPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControl fullWidth margin="normal" error={!!fieldErrors.role}>
                            <InputLabel id="role-label">Роль</InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                name="role"
                                value={formData.role}
                                label="Роль"
                                onChange={handleChange}
                                disabled={isLoading}
                            >
                                <MenuItem value="TEACHER">Преподаватель</MenuItem>
                                <MenuItem value="ADMIN">Администратор</MenuItem>
                            </Select>
                            <FormHelperText>{fieldErrors.role}</FormHelperText>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Зарегистрироваться'}
                        </Button>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Уже есть аккаунт? Войдите
                            </Link>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Register;