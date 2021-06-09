import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import { grey, red, yellow } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: (course) => {
            if (course.grade === "A2") {
                return red[700];
            } else {
                return grey[700];
            }
        }
    },
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
  }));

  
const CourseItem = ({courses, handleDelete, handleAddCourse}) => {
    const classes = useStyles();

    const [grade, setGrade] = useState("");
    const [credit, setCretit] = useState("");
    const [code, setCode] = useState("");
    const [name, setName] = useState("");

    const [open, setOpen] = React.useState(false);
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const inputProps = {
        step: 0.5,
      };
      
    return ( 
            <List className={classes.root}>
                {courses.map((course) => (
                    <ListItem dense button key={course.code}>
                        
                        <ListItemAvatar >
                             <Avatar className={classes.avatar}>
                                {course.grade}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={course.code}
                            secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    {"Credit: " + course.credit}
                                  </Typography>
                                  {" " + course.name}
                                </React.Fragment>
                              }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(course)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new course
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new course, please the details here.
          </DialogContentText>
          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="name"
            value={code}
            label="Course Code"
            onChange={(e) => {setCode(e.target.value)}}
            fullWidth
          />
        <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            value={name}
            label="Course Name"
            onChange={(e) => {setName(e.target.value)}}
            fullWidth
        />
        <TextField
            autoFocus
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
          <Button onClick={() => {
              handleAddCourse(
                {
                "code": code, 
                "name": name, 
                "grade": grade, 
                "credit": credit
                }
              )
              handleClose()
            }} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            </List>
    );
    
}
 
export default CourseItem;