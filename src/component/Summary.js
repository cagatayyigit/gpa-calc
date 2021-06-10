import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey, red, yellow } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Container } from '@material-ui/core';

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

const toInt = (grade) => {
  if (grade === "A1") return 4.0;
  if (grade === "A2") return 3.75;
  if (grade === "A3") return 3.50;
  if (grade === "B1") return 3.25;
  if (grade === "B2") return 3.0;
}

export default function Summary({terms, handleAddTerm}) {
  const classes = useStyles();
  

  let totalCredit = 0;
  let termGpa = 0;
  for (var j = 0; j < terms.length; j++ ){
      var term = terms[j];
    for (var i = 0; i < term.length; i++) {
        let currCredit = parseInt(term[i].credit)
        totalCredit += currCredit
        termGpa += currCredit * toInt(term[i].grade)
      }
  }


  return (

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          Cummulative GPA
        </Typography>
        <Typography variant="h5" component="h2">
            {(termGpa / totalCredit).toPrecision(3)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {"Total Credit: " +totalCredit}
        </Typography>

      </CardContent>
      
      <CardActions>
        <Button variant="outlined"  size="small" onClick={handleAddTerm}>Add Term</Button>
      </CardActions>

      
    </Card>
    
  );
}
