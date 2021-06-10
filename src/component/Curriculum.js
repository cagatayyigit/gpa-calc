import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import { CardHeader, IconButton } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { CurriculumService } from '../service/CurriculumService';
import EditCurriculumDialog from './EditCurriculumDialog';
import { takenCoursesServices } from '../service/TakenCoursesService';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));


export default function Curriculum() {
  const classes = useStyles();

  const [editCurriculumDialogOpen, setEditCurriculumDialogOpen] = useState(false);

  const handleOpenEditCurriculumDialog = () => {
    setEditCurriculumDialogOpen(true);
  }

  const handleCloseEditCurriculumDialog = () => {
    setEditCurriculumDialogOpen(false);
  }

  const [terms, setTerms] = useState(CurriculumService.getCurriculum().curriculum);
  CurriculumService.saveCurriculum({"curriculum": terms});

  const isTaken = (course) => {
    let takenCourses = takenCoursesServices.getTakenCourses().taken_courses;
    console.log(takenCourses)
    for (var j = 0; j < takenCourses.length; j++) {
        var term = takenCourses[j];
        for (var i = 0; i < term.length; i++) {
            if (term[i].code === course.code){
              console.log(term[i].code, course.code)
                return true;
            }
        }
    }
    return false;
  }

  return (
    <Card variant={"outlined"} >
      <CardHeader  
        action ={
        <IconButton onClick={handleOpenEditCurriculumDialog}>
            <EditOutlinedIcon/>
        </IconButton>
        }
        title={"Curriculum"}
      />
      <List className={classes.root} subheader={<li />}>
        {terms.map((term, idx) => (
          <li key={`section-${idx}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`Term  ${idx}`}</ListSubheader>
              {term.map((course) => (
                <ListItem disabled={isTaken(course)} dense  key={`item-${idx}-${course}`}>
                  <ListItemText primary={`${course.code} - ${course.name} - ${course.credit}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
      <EditCurriculumDialog open={editCurriculumDialogOpen} handleClose={handleCloseEditCurriculumDialog} />
    </Card>
  );
}
