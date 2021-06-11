import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GradingScaleService } from '../service/GradingScaleService';
import AddCourseDialog from './AddCourseDialog';

const useStyles = makeStyles({

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
  formControl: {
    width: '100%',
},
});

export default function TermSummary({term, termIdx, handleAddCourse, handleRemoveTerm}) {
  const classes = useStyles();



  const [open, setOpen] = React.useState(false);
  
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let totalCredit = 0;
  let termGpa = 0;
  for (var i = 0; i < term.length; i++) {
    let currCredit = parseInt(term[i].credit)
    totalCredit += currCredit
    termGpa += currCredit * GradingScaleService.gradeToScore(term[i].grade)
  }

  return (
    <Card  variant={"outlined"} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          Term - {termIdx + 1} GPA
        </Typography>
        <Typography variant="h5" component="h2">
          {(termGpa / totalCredit).toPrecision(3)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {"Total Credit: " +totalCredit}
        </Typography>
        <Typography variant="body2" component="p">
          you have to work hard.
        </Typography>
      </CardContent>
      
      <CardActions>
                <Button variant="contained"  size="small" color="primary" onClick={handleClickOpen}>Add Course</Button>
                <Button variant="outlined"  size="small" onClick={() => handleRemoveTerm(term)}>Remove Term</Button>
      </CardActions>

      <AddCourseDialog initialCode={""} initialName={""} initialCredit={0} term={term} termIdx={termIdx} open={open} handleClose={handleClose} handleAddCourse={handleAddCourse}/>
    
    </Card>
  );
}
