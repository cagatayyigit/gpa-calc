import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
  if (grade === "B3") return 2.75;
  if (grade === "C1") return 2.50;
  if (grade === "C2") return 2.25;
  if (grade === "C3") return 2.0;
  if (grade === "D") return 1.75;
  if (grade === "F2") return 0;
  if (grade === "F3") return 0;
}
export default function TermSummary({term, termIdx, handleAddCourse, handleRemoveTerm}) {
  const classes = useStyles();
  const [grade, setGrade] = useState("");
  const [credit, setCretit] = useState(0);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [valid, setValid] = useState(true);

  const [open, setOpen] = React.useState(false);
  
  const addCourse = (term, termIdx, course) => {
    if (valid) {
      handleAddCourse(term,termIdx,course )
      handleClose()
      setGrade("")
      setCode("")
      setName("")
      setCretit("")
    }else {
      // alert 
    }
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const inputProps = {
      step: 0.5,
    };

  let totalCredit = 0;
  let termGpa = 0;
  for (var i = 0; i < term.length; i++) {
    let currCredit = parseInt(term[i].credit)
    totalCredit += currCredit
    termGpa += currCredit * toInt(term[i].grade)
  }


  return (
    <Card  variant={"outlined"} className={classes.root}>
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
      
      <CardActions>
                <Button variant="outlined"  size="small" onClick={handleClickOpen}>Add Course</Button>
                <Button variant="outlined"  size="small" onClick={() => handleRemoveTerm(term)}>Remove Term</Button>
                <Button variant="outlined"  size="small">--------------------</Button>
      </CardActions>

      <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new course, please the details here.
          </DialogContentText>
          <TextField
            variant="outlined"
            autoFocus
            error ={!valid}
            required
            margin="dense"
            id="name"
            value={code}
            label="Course Code"
            onChange={(e) => {
              let flag = true;
              term.forEach((t, idx) => {
                if (t.code === e.target.value) {
                  flag = false;
                } 
              })
             setValid(flag);
              setCode(e.target.value)
            }}
            fullWidth
          />
        <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            required
            id="name"
            value={name}
            label="Course Name"
            onChange={(e) => {setName(e.target.value)}}
            fullWidth
        />
        <TextField
            autoFocus
            required
            variant="outlined"
            margin="dense"
            id="name"
            label="Course Credit"
            value={credit}
            type="number"
            step = {0.1}
            onChange={(e) => {setCretit(e.target.value)}}
            inputProps={inputProps}
            fullWidth
        />
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Course Grade</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={grade}
            label = "Course Grade"
            onChange={(e) => {setGrade(e.target.value)}}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value="A1">A1</MenuItem>
            <MenuItem value="A2">A2</MenuItem>
            <MenuItem value="A3">A3</MenuItem>
            </Select>
        </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={
            
            () => {
             addCourse(term, termIdx, {
              "code": code, 
              "name": name, 
              "grade": grade, 
              "credit": credit
              })
            }} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Card>
  );
}
