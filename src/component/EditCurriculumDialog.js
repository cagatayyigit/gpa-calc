import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { CurriculumService } from '../service/CurriculumService';



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
}));


export default function EditCurriculumDialog({ open, handleClose }) {
    const classes = useStyles();

    const [curriculum, setCurriculum] = useState(CurriculumService.getCurriculum().curriculum);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Curriculum</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add or remove courses for your curriculum.
                </DialogContentText>
                {Object.entries(curriculum).map(([k, v], i) => {
                    return (
                        <Box key={k} className={classes.dialogRow}>
                            <TextField className={classes.dialogGradeField}
                                variant="outlined"
                                label={"Code"}
                                onChange={(event) => {
                                    //const newScale = {};
                                    //delete Object.assign(newScale, scale, {[event.target.value]: scale[k] })[k];
                                }}
                                value={k}
                            inputMode="text"/>
                            <TextField className={classes.dialogScoreField}
                                variant="outlined"
                                label={"Name"}
                                value={v}
                                inputMode="number"/>
                            
                        </Box>
                    );
                })}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    CANCEL
                </Button>
                <Button color="primary" onClick={() => {
                    //setScale({...scale, "": 0.0});
                }}>
                    ADD COURSE
                </Button>
                <Button onClick={handleClose} color="primary">
                    SAVE
                </Button>
            </DialogActions>
        </Dialog>
    );
}