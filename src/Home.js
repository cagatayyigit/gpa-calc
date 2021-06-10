import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TermSummary from '../src/component/TermSummary';
import Summary from '../src/component/Summary';
import CourseCard from "../src/component/CourseCard"
import { grey } from '@material-ui/core/colors';
import { Box} from '@material-ui/core';
import Curriculum from "../src/component/Curriculum";
import {takenCoursesServices} from "../src/service/TakenCoursesService";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    term: {
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    curriculum: {
        backgroundColor: grey[300],
        height: "100%"
    },
    curriculumGrid: {
        backgroundColor: grey[300],
    },

    summaryContainer: {
        marginBottom: theme.spacing(2),
    }
}));


const Home = () => {

    const [terms, setTerms] = useState(takenCoursesServices.getTakenCourses().taken_courses)
    takenCoursesServices.saveTakenCourses({"taken_courses": terms});

    const classes = useStyles(terms);

    const handleDelete = (termIdx, courseIdx, course) => {
        let newTerms = [...terms]
        newTerms.forEach((t, idx) => {
            newTerms[idx] = newTerms[idx].filter(c => c !== course)
        })
        setTerms(newTerms)
        takenCoursesServices.removeCourse(course);
    }

    const handleAddCourse = (term, termIdx, course) => {

        let newTerms = [...terms]
        newTerms[termIdx].push(course);
        setTerms(newTerms);
        takenCoursesServices.addCourse(term, termIdx, course);
    }

    const handleAddTerm = () => {

        let newTerms = [...terms]
        newTerms.push([]);
        setTerms(newTerms);
    }


    const handleRemoveTerm = (term) => {
        let newTerms = terms.filter(t => t !== term);
        setTerms(newTerms);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Box className={classes.summaryContainer}>
                        <Summary terms={terms} handleAddTerm={handleAddTerm} />
                    </Box>
                    {terms.map((term, termIdx) => (
                        <Grid container spacing={2} className={classes.term}>
                            <Grid item xs={3}>
                                <TermSummary term={term} termIdx={termIdx} handleAddCourse={handleAddCourse} handleRemoveTerm={handleRemoveTerm} />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container className={classes.term}>
                                    <Grid container spacing={1} className={classes.term}>
                                        {term.map((course, courseIdx) => (
                                            <Grid item xs={6} md={3}>
                                                <CourseCard termIdx={termIdx} courseIdx={courseIdx} course={course} handleDelete={handleDelete} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    ))}
                </Grid>

                <Grid item xs={3} > 
                        <Curriculum handleAddCourse={handleAddCourse} handleAddTerm={handleAddTerm}/> 
                </Grid>

            </Grid>

        </div>
    );
}

export default Home;