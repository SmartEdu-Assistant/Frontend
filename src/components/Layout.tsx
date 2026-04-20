import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Tooltip,
    Stack,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
        handleClose();
    };

    const hideAppBar = location.pathname === '/login' || location.pathname === '/register';

    if (hideAppBar) {
        return <Outlet />;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                        Smart Edu
                    </Typography>

                    {isAuthenticated && user && (
                        <Stack direction="row" alignItems="center" spacing={1.5}>
                            {user.role === 'ADMIN' ? (
                                <>
                                    <Button color="inherit" onClick={() => navigate('/')}>Главная</Button>
                                    <Button color="inherit" onClick={() => navigate('/students')}>Преподаватели</Button>
                                    <Button color="inherit" onClick={() => navigate('/admin/statistics')}>Статистика</Button>
                                    <Button color="inherit" onClick={() => navigate('/groups')}>Настройки</Button>
                                </>
                            ) : (
                                <>
                                    <Button color="inherit" onClick={() => navigate('/')}>Главная</Button>
                                    <Button color="inherit" onClick={() => navigate('/courses')}>Мои курсы</Button>
                                    <Button color="inherit" onClick={() => navigate('/assignments')}>Журнал</Button>
                                    <Button color="inherit" onClick={() => navigate('/submissions')}>Профиль</Button>
                                </>
                            )}

                            <Tooltip title="Профиль">
                                <IconButton onClick={handleMenu} color="inherit">
                                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                                        {user.first_name?.[0]}{user.last_name?.[0]}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem disabled>
                                    <Typography variant="body2">
                                        {user.first_name} {user.last_name}
                                    </Typography>
                                </MenuItem>
                                <MenuItem disabled>
                                    <Typography variant="caption" color="textSecondary">
                                        {user.role === 'ADMIN' ? 'Администратор' : 'Преподаватель'}
                                    </Typography>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem onClick={handleLogout}>
                                    <Logout fontSize="small" sx={{ mr: 1 }} />
                                    Выйти
                                </MenuItem>
                            </Menu>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>

            {/* Основной контент */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;