import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { teachers } from '../data/mockData';

const Students = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user?.role === 'ADMIN') {
        return (
            <Stack spacing={3}>
                <Typography variant="h4">Список преподавателей</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <TextField label="Поиск" size="small" />
                    <Button variant="contained">Добавить преподавателя</Button>
                </Stack>
                <Grid container spacing={2}>
                    {teachers.map((teacher) => (
                        <Grid size={{ xs: 12, md: 4 }} key={teacher.id}>
                            <Card>
                                <CardContent>
                                    <Typography fontWeight={600}>{teacher.name}</Typography>
                                    <Typography color="text.secondary">Курсы: {teacher.course}</Typography>
                                    <Typography color="text.secondary">Статус: {teacher.status}</Typography>
                                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                        <Button size="small" variant="outlined">Редактировать</Button>
                                        <Button size="small" variant="outlined">Блокировать</Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        );
    }

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Студенты</Typography>
            <Card>
                <CardContent>
                    <Typography>Иванов А.</Typography>
                    <Typography>Петров В.</Typography>
                    <Typography>Сидоров К.</Typography>
                    <Button sx={{ mt: 2 }} onClick={() => navigate('/students/student-1')}>Открыть профиль</Button>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default Students;
