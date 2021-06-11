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
import { TakenCoursesService } from '../service/TakenCoursesService';
import AddCourseDialog from './AddCourseDialog';


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


export default function Curriculum({handleAddCourse, handleAddTerm}) {
  const classes = useStyles();

  const [editCurriculumDialogOpen, setEditCurriculumDialogOpen] = useState(false);

  const handleOpenEditCurriculumDialog = () => {
    setEditCurriculumDialogOpen(true);
  }

  const handleCloseEditCurriculumDialog = () => {
    setEditCurriculumDialogOpen(false);
    // update terms
  }

  const terms = CurriculumService.getCurriculum();
  
  const isTaken = (course) => {
    let takenCourses = TakenCoursesService.getTakenCourses();
    for (var j = 0; j < takenCourses.length; j++) {
        var term = takenCourses[j];
        for (var i = 0; i < term.length; i++) {
            if (term[i].code === course.code){
                return true;
            }
        }
    }
    return false;
  }

  
  const [openAddCourse, setOpenAddCourse] = React.useState(false);

  const handleAddCourseClickOpen = () => {
    setOpenAddCourse(true);
  };

  const handleAddCourseClose = () => {
    setOpenAddCourse(false);
  };


const [selectedCourse, setSelectedCourse] = useState([]);
const [selectedTerm, setSelectedTerm] = useState([]);
const [selectedTermIdx, setSelectedTermIdx] = useState(0);


const takenCourses = TakenCoursesService.getTakenCourses()

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
              <ListSubheader>{`Term  ${idx + 1}`}</ListSubheader>
              {term.map((course) => (
                <ListItem button onClick={(e) => {
                  if(idx >= TakenCoursesService.getTakenCourses().length) {
                    handleAddTerm();
                  }
                  setSelectedCourse(course);
                  setSelectedTerm(takenCourses[idx]);
                  setSelectedTermIdx(idx);
                  handleAddCourseClickOpen(); 
                }} disabled={isTaken(course)} dense  key={`item-${idx}-${course}`}>
                  <ListItemText primary={`${course.code} - ${course.name} (${course.credit})`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
      <EditCurriculumDialog open={editCurriculumDialogOpen} handleClose={handleCloseEditCurriculumDialog} />
      <AddCourseDialog initialCode={selectedCourse.code} initialName={selectedCourse.name} initialCredit={selectedCourse.credit} term={selectedTerm} termIdx={selectedTermIdx} open={openAddCourse} handleClose={handleAddCourseClose} handleAddCourse={handleAddCourse}/>
    </Card>
  );
}
