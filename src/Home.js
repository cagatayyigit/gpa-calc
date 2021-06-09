import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CourseItem from './component/CourseItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Summary from '../src/component/Summary';
import { Divider } from '@material-ui/core';
import CourseCard from "../src/component/CourseCard"
import { grey, red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      
    },
    term: {
        paddingBottom: theme.spacing(2),
        backgroundColor: (term) => {
            if (term === "A1") {
                return red[700];
            }
            else {
                return grey[700];
            }
        }
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

  
const Home = () => {
    
    const [terms, setTerms] = useState([      
        [
            {"code": "BBM102", "name": "Introduction to Programming", "grade": "A2", "credit": 6},
            {"code": "BBM103", "name": "Introduction to Programming", "grade": "B2", "credit": 3},
            {"code": "BBM406", "name": "Introduction to Machine", "grade": "A2", "credit": 4},
            {"code": "BBM406", "name": "Introduction to Machine", "grade": "A2", "credit": 4},
            {"code": "BBM406", "name": "Introduction to Machine", "grade": "A2", "credit": 4},
        ],
        [
            {"code": "BBM102", "name": "Introduction to Machine", "grade": "B2", "credit": 3},
            {"code": "BBM103", "name": "Introduction to Machine", "grade": "B2", "credit": 3},
            {"code": "BBM406", "name": "Introductine Learning", "grade": "A2", "credit": 4},
        ],
 
    ])

    const classes = useStyles(terms);

    const handleDelete = (termIdx, courseIdx, course) => {
        let newTerms = [...terms]
        newTerms.forEach((t, idx) => {
            newTerms[idx] = newTerms[idx].filter(c => c !== course)
        })
        setTerms(newTerms)
    }

    const handleAddCourse = (term, termIdx, course) => {

        let newTerms = [...terms]
        newTerms[termIdx].push(course);
        setTerms(newTerms);
        console.log(term)
       
        console.log(course)
    }

    return (  
        <div className={classes.root}>           
            {terms.map((term, termIdx) => (
                <Grid container spacing={2} className={classes.term}>
                    <Grid item xs={3}>
                        <Summary term={term} termIdx={termIdx} handleAddCourse = {handleAddCourse}/>
                    </Grid> 
                    <Grid item xs={9}>
                        <Grid container  className={classes.term}>         
                            <Grid container spacing={1} className={classes.term}>
                                {term.map((course, courseIdx) => (
                                    <Grid item xs={6} md={3}>
                                        <CourseCard termIdx={termIdx} courseIdx={courseIdx} course={course} handleDelete={handleDelete}/>
                                    </Grid> 
                                ))}
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
                
            ))}
      </div>
    );
}
 
export default Home;