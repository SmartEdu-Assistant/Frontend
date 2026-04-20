import { Button, Card, CardContent, FormControlLabel, Stack, Switch, TextField, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Groups = () => {
    const { user } = useAuth();

    if (user?.role === 'ADMIN') {
        return (
            <Stack spacing={3}>
                <Typography variant="h4">Настройки системы</Typography>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Поддерживаемые языки</Typography>
                        <Stack spacing={1} sx={{ mt: 1 }}>
                            <FormControlLabel control={<Switch defaultChecked />} label="Python" />
                            <FormControlLabel control={<Switch defaultChecked />} label="JavaScript" />
                            <FormControlLabel control={<Switch defaultChecked />} label="Java" />
                            <FormControlLabel control={<Switch defaultChecked />} label="C++" />
                        </Stack>
                        <Typography sx={{ mt: 2 }} variant="h6">Порог плагиата</Typography>
                        <TextField size="small" defaultValue={60} sx={{ mt: 1, width: 200 }} />
                        <Button variant="contained" sx={{ mt: 2 }}>Сохранить изменения</Button>
                    </CardContent>
                </Card>
            </Stack>
        );
    }

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Группы</Typography>
            <Card>
                <CardContent>
                    <Typography>Группа ПИ-101: 20 студентов</Typography>
                    <Typography>Группа ПИ-102: 18 студентов</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default Groups;
