import { Button, Card, CardContent, LinearProgress, Stack, Typography } from '@mui/material';

const AdminStatistics = () => {
    const langStats = [
        { name: 'Python', value: 80 },
        { name: 'JavaScript', value: 60 },
        { name: 'Java', value: 40 },
        { name: 'C++', value: 20 },
    ];

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Статистика системы</Typography>
            <Card>
                <CardContent>
                    <Typography variant="h6">Период: последние 30 дней</Typography>
                    <Typography sx={{ mt: 2, mb: 1 }}>Языки программирования</Typography>
                    <Stack spacing={1.5}>
                        {langStats.map((item) => (
                            <Stack key={item.name} direction="row" spacing={1.5} alignItems="center">
                                <Typography sx={{ minWidth: 120 }}>{item.name}</Typography>
                                <LinearProgress variant="determinate" value={item.value} sx={{ flexGrow: 1, height: 10, borderRadius: 10 }} />
                                <Typography>{item.value}%</Typography>
                            </Stack>
                        ))}
                    </Stack>
                    <Typography sx={{ mt: 2 }}>
                        Средний процент сдач: Python 87%, JavaScript 72%, Алгоритмы 65%
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        <Button variant="outlined">Выгрузить PDF</Button>
                        <Button variant="outlined">Выгрузить Excel</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default AdminStatistics;