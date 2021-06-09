import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CourseItem from './component/CourseItem';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
const Home = () => {
    const classes = useStyles();
    

    const [courses, setCourses] = useState([
        {"code": "BBM102", "name": "Introduction to Programming", "grade": "A2", "credit": 6},
        {"code": "BBM103", "name": "Introduction to Programming Lab", "grade": "B2", "credit": 3},
        {"code": "BBM406", "name": "Introduction to Machine Learning", "grade": "A2", "credit": 4},
    ]);

   const handleDelete = (course) => {
        const newCourses = courses.filter(c => c.code !== course.code);
        setCourses(newCourses);
   }

   const handleAddCourse = (course) => {
        const newCourses = [...courses];
        console.log(course);
        newCourses.push(course);
        setCourses(newCourses);
   }
  
    return (  
        <Container>
            <CourseItem courses={courses} handleDelete={handleDelete} handleAddCourse={handleAddCourse}/>
        </Container>
    );
}
 
export default Home;