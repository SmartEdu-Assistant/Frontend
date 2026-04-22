import { Card, CardContent, Stack, Typography } from '@mui/material';

const StudentDetail = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h4">Профиль студента</Typography>
            <Card>
                <CardContent>
                    <Typography>ФИО: Иванов Алексей</Typography>
                    <Typography>Группа: ПИ-101</Typography>
                    <Typography>Текущий прогресс: 92%</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default StudentDetail;
