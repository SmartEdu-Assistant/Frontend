import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    private handleReload = (): void => {
        window.location.reload();
    };

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                    }}
                >
                    <Paper sx={{ p: 4, width: '100%', maxWidth: 520 }}>
                        <Stack spacing={2}>
                            <Typography variant="h5">Что-то пошло не так</Typography>
                            <Typography color="text.secondary">
                                Произошла ошибка в интерфейсе. Страница не будет закрыта, вы можете перезапустить приложение.
                            </Typography>
                            <Button variant="contained" onClick={this.handleReload}>
                                Перезагрузить страницу
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
