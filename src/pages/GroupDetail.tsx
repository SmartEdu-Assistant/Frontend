import { Card, CardContent, Stack, Typography } from '@mui/material';

const GroupDetail = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h4">Детали группы</Typography>
            <Card>
                <CardContent>
                    <Typography>Список студентов, прогресс и дедлайны по заданиям.</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default GroupDetail;
