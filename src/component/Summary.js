import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import  GradingScaleDialog  from "./GradingScaleDialog";
import { GradingScaleService } from '../service/GradingScaleService';
import { PieChart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    width: '100%',
  },
  root: {
  }
}));

export default function Summary({ terms, handleAddTerm }) {
  const classes = useStyles();



  const [gradingScaleDialogOpen, setGradingScaleDialogOpen] = useState(false);

  let totalCredit = 0;
  let termGpa = 0;
  for (var j = 0; j < terms.length; j++) {
    var term = terms[j];
    for (var i = 0; i < term.length; i++) {
      let currCredit = parseInt(term[i].credit)
      totalCredit += currCredit
      termGpa += currCredit * GradingScaleService.gradeToScore(term[i].grade);
    }
  }


  const handleOpenGradingScaleDialog = () => {
    setGradingScaleDialogOpen(true);
  }

  const handleCloseGradingScaleDialog = () => {
    setGradingScaleDialogOpen(false);
  }

  return (
    <Box>
      
      <Card variant={"outlined"} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" >
            Cumulative GPA
        </Typography>
          <Typography variant="h2">
            {(termGpa / totalCredit).toPrecision(3)}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {"Total Credit: " + totalCredit}
          </Typography>
          
        </CardContent>

        <CardActions>
          <Button variant="contained" size="small" color="primary" onClick={handleAddTerm}>ADD TERM</Button>
          <Button variant="outlined" size="small" onClick={handleOpenGradingScaleDialog}>SET GRADING SCALE</Button>
        </CardActions>
      </Card>

      <GradingScaleDialog open={gradingScaleDialogOpen} handleClose={handleCloseGradingScaleDialog} />
    </Box>
   
  );
}
