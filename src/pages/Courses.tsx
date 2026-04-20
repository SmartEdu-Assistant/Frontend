import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/mockData';

const Courses = () => {
    const navigate = useNavigate();

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Мои курсы</Typography>
            <Grid container spacing={2}>
                {courses.map((course) => (
                    <Grid size={{ xs: 12, md: 6 }} key={course.id}>
                        <Card onClick={() => navigate(`/courses/${course.id}`)} sx={{ cursor: 'pointer' }}>
                            <CardContent>
                                <Typography variant="h6">{course.title}</Typography>
                                <Typography color="text.secondary">Прогресс: {course.progress}%</Typography>
                                <Typography color="text.secondary">{course.assignmentsTotal} заданий</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Courses;
