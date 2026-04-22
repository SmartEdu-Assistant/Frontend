import { Card, CardContent, Stack, Typography } from '@mui/material';

const TestResults = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h4">Детальные результаты тестов</Typography>
            <Card>
                <CardContent>
                    <Typography>test_calc_positive: пройден</Typography>
                    <Typography>test_calc_negative: пройден</Typography>
                    <Typography>test_calc_zero: пройден</Typography>
                    <Typography>test_calc_large: пройден</Typography>
                    <Typography sx={{ mt: 2 }}>Сводка: 4/4 тестов пройдено</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default TestResults;
