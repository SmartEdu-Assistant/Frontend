import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();

    return (
        <Stack spacing={2}>
            <Typography variant="h4">Курс {courseId}</Typography>
            <Card>
                <CardContent>
                    <Typography>Внутри курса доступны задания, группы и журнал.</Typography>
                    <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate('/assignments')}>
                        Перейти к заданиям
                    </Button>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default CourseDetail;
