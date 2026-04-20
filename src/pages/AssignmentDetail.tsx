import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AssignmentDetail = () => {
    const navigate = useNavigate();

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Лабораторная работа №3. Функции</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Загрузка работ студентов</Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Поддерживаются `.py` файлы. Пакетная загрузка и автоматическая проверка.
                            </Typography>
                            <Button variant="contained" onClick={() => navigate('/submissions')}>Перейти к загрузке</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Журнал оценок</Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Предварительные оценки формируются автоматически и доступны для ручной корректировки.
                            </Typography>
                            <Button variant="contained" onClick={() => navigate('/assignments/a1/journal')}>Открыть журнал</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default AssignmentDetail;
