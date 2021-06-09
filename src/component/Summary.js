import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
});

const toInt = (grade) => {
  if (grade === "A1") return 4.0;
  if (grade === "A2") return 3.75;
  if (grade === "A3") return 3.50;
  if (grade === "B1") return 3.25;
  if (grade === "B2") return 3.0;
}

export default function Summary({term}) {
  const classes = useStyles();


  let totalCredit = 0;
  let termGpa = 0;
  for (var i = 0; i < term.length; i++) {
    totalCredit += term[i].credit
    termGpa += term[i].credit * toInt(term[i].grade)
  }


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          Term GPA
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

    </Card>
  );
}
