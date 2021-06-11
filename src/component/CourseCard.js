import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { DeleteOutlined } from "@material-ui/icons";
import { Avatar, CardHeader, IconButton } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { GradingScaleService } from '../service/GradingScaleService';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 1.2,
    },
    card: {
        border: (course) => {
            return `1px solid ${GradingScaleService.getColor(course.grade)}`;
        }
    },
    avatar: {
        backgroundColor: (course) => {
            return GradingScaleService.getColor(course.grade);
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    creditTypography: {
        marginLeft: theme.spacing(1),
        color: theme.palette.primary.main,
    },
}));


export default function CourseCard({ termIdx, courseIdx, course, handleDelete }) {
    const classes = useStyles(course);
    return (
        <div>
            <Card variant={"outlined"} className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {course.grade}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(termIdx, courseIdx, course)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={course.code}
                    subheader={
                        <Box flex="column">
                            <Typography variant="caption">{course.name}</Typography>
                            <Typography className={classes.creditTypography} variant="caption">{course.credit}</Typography>
                        </Box>
                    }
                />
            </Card>
        </div>
    );
}