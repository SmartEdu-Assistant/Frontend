import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { submissions } from '../data/mockData';

const Submissions = () => {
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(false);

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Процесс проверки</Typography>

            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Перетащите файлы сюда</Typography>
                    <Typography color="text.secondary">Выбрано файлов: 20</Typography>
                    <Button
                        variant="contained"
                        sx={{ mt: 2 }}
                        onClick={() => setIsChecking((state) => !state)}
                    >
                        {isChecking ? 'Остановить проверку' : 'Запустить проверку'}
                    </Button>
                    {isChecking && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>Обработано: 8 из 20</Typography>
                            <LinearProgress variant="determinate" value={40} />
                        </Box>
                    )}
                </CardContent>
            </Card>

            <Typography variant="h5">Результаты проверки</Typography>
            <Grid container spacing={2}>
                {submissions.map((submission) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={submission.id}>
                        <Card>
                            <CardContent>
                                <Typography fontWeight={600}>{submission.student}</Typography>
                                <Typography color="text.secondary">
                                    {submission.status === 'failed'
                                        ? 'Ошибка компиляции'
                                        : submission.status === 'plagiarism'
                                            ? `Найден плагиат (${submission.tests}%)`
                                            : `Тесты: ${submission.tests}%`}
                                </Typography>
                                <Button sx={{ mt: 1 }} onClick={() => navigate(`/submissions/${submission.id}`)}>
                                    Открыть
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Submissions;
