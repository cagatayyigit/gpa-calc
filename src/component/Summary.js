import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import  GradingScaleDialog  from "./GradingScaleDialog";

const useStyles = makeStyles((theme) => ({

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
  root: {
  }
}));


const toInt = (grade) => {
  if (grade === "A1") return 4.0;
  if (grade === "A2") return 3.75;
  if (grade === "A3") return 3.50;
  if (grade === "B1") return 3.25;
  if (grade === "B2") return 3.0;
  if (grade === "B3") return 2.75;
  if (grade === "C1") return 2.50;
  if (grade === "C2") return 2.25;
  if (grade === "C3") return 2.0;
  if (grade === "D") return 1.75;
  if (grade === "F2") return 0;
  if (grade === "F3") return 0;
}

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
      termGpa += currCredit * toInt(term[i].grade)
    }
    console.log(termGpa)
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
            Cummulative GPA
        </Typography>
          <Typography variant="h5" component="h2">
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
