import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {DeleteOutlined} from "@material-ui/icons";
import { Avatar, CardHeader, IconButton } from '@material-ui/core';
import { grey} from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    padding: 1.2,
  },
  avatar: {
    backgroundColor: (course) => {
        if (course.grade === "A1") {
            return "#57bb8a";
        }
        if (course.grade === "A2") {
            return "#57bb8a";
        }
        if (course.grade === "A3") {
            return "#57bb8a";
        } 
        if (course.grade === "B1") {
            return "#9ace6a";
        }
        if (course.grade === "B2") {
            return "#9ace6a";
        }
        if (course.grade === "B3") {
          return "#9ace6a";
        }
        if (course.grade === "C1") {
          return "#ffcf02";
        }
        if (course.grade === "C2") {
            return "#ffcf02";
        }
        if (course.grade === "C3") {
          return "#ffcf02";
        }
        if (course.grade === "D") {
          return "#ff9f02";
      }
      if (course.grade === "F2") {
        return "#ff6f31";
      }
      if (course.grade === "F3") {
        return "#ff6f31";
      }
        else {
            return grey[700];
        }
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
});

export default function CourseCard({termIdx, courseIdx, course, handleDelete}) {
  const classes = useStyles(course);
  return (
    <div>
        <Card  variant={"outlined"} >
            <CardHeader
                avatar ={
                    <Avatar className={classes.avatar}>
                        {course.grade}
                    </Avatar>
                }
                action ={
                    <IconButton onClick={() => handleDelete(termIdx, courseIdx, course)}>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title={course.code}
                subheader={course.name +  " " + course.credit}
            />
        </Card>
    </div>
  );
}
