import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { GradingScaleService } from '../service/GradingScaleService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
    root: {

    },
    dialogRow: {
        marginBottom: theme.spacing(2),
    },
    dialogGradeField: {
        marginRight: theme.spacing(2)
    },
    dialogScoreField: {
    },
    formControl: {
        width: '100%',
    },
}));


export default function AddCourseDialog({ term, termIdx, open, handleAddCourse, handleClose, initialCode, initialName, initialCredit}) {
    const classes = useStyles();
    let scales = GradingScaleService.getGradingScale();

    const [grade, setGrade] = useState("");
    const [credit, setCretit] = useState(initialCredit);
    const [code, setCode] = useState(initialCode);
    const [name, setName] = useState(initialName);
    const [valid, setValid] = useState(true);
    const inputProps = {step: 0.5};

   React.useEffect(() => {
       console.log(initialCode)
    setCode(initialCode)
    setName(initialName);
    setCretit(initialCredit);
   }, [initialCode, initialCredit, initialName])

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

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Course</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add a new course, please fill the details here.
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
                        onChange={(e) => {setGrade(e.target.value)}}>

                        <MenuItem value=""><em>None</em></MenuItem>

                        {scales.map((row) => (
                        <MenuItem value={row.grade}>{row.grade}</MenuItem>
                        ))}
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
    );
}