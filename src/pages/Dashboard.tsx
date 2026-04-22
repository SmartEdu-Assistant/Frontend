import { Box, Card, CardContent, Grid, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { assignments, courses } from '../data/mockData';

const Dashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user?.role === 'ADMIN') {
        return (
            <Stack spacing={3}>
                <Typography variant="h4">Дашборд администратора</Typography>
                <Grid container spacing={2}>
                    {[
                        { title: 'Преподавателей', value: '15' },
                        { title: 'Студентов', value: '234' },
                        { title: 'Активных курсов', value: '12' },
                    ].map((item) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h4">{item.value}</Typography>
                                    <Typography color="text.secondary">{item.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Последние события</Typography>
                        <Typography>10:30 Добавлен преподаватель</Typography>
                        <Typography>09:15 Загружено 45 работ</Typography>
                        <Typography>Завершен курс "Python"</Typography>
                    </CardContent>
                </Card>
            </Stack>
        );
    }

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Прототип для преподавателя</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Мои курсы</Typography>
                            <Stack spacing={2}>
                                {courses.map((course) => (
                                    <Box key={course.id} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                                        <Typography fontWeight={600}>{course.title}</Typography>
                                        <Typography color="text.secondary">Прогресс: {course.progress}%</Typography>
                                        <Typography color="text.secondary">{course.assignmentsTotal} заданий</Typography>
                                        <Button size="small" sx={{ mt: 1 }} onClick={() => navigate('/courses')}>Открыть</Button>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                                <Typography variant="h6">Активные задания</Typography>
                                <Button variant="contained" onClick={() => navigate('/assignments')}>Создать задание</Button>
                            </Stack>
                            <Stack spacing={2}>
                                {assignments.map((assignment) => (
                                    <Box key={assignment.id} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                                        <Typography fontWeight={600}>{assignment.title}</Typography>
                                        <Typography color="text.secondary">{assignment.topic}</Typography>
                                        <Typography color="text.secondary">Сдано: {assignment.submitted}/{assignment.total}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Dashboard;
