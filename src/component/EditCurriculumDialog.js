import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Typography } from '@material-ui/core';
import { CurriculumService } from '../service/CurriculumService';
import { DeleteOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: { 
    },
    dialogRow: {
        marginBottom: theme.spacing(2),
    },
    dialogCourseCodeField: {
        marginRight: theme.spacing(1),
    },
    dialogCourseNameField: {
        marginRight: theme.spacing(1),
    },
    dialogCourseCreditField: {
    },
    termBox: {
        border: "1px solid grey",
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    termText: {
        paddingBottom: theme.spacing(2),
    }
}));


export default function EditCurriculumDialog({ open, handleClose }) {
    const classes = useStyles();

    const [curriculum, setCurriculum] = useState(CurriculumService.getCurriculum());
    let copyCurriculum = [...curriculum];

    const inputProps = {step: 0.5};

    const handleCourseCodeChange = (tidx, cidx, event) => {
        copyCurriculum[tidx][cidx].code = event.target.value;
        setCurriculum(copyCurriculum);
    }

    const handleCourseNameChange = (tidx, cidx, event) => {
        copyCurriculum[tidx][cidx].name = event.target.value;
        setCurriculum(copyCurriculum);
    }

    const handleCourseCreditChange = (tidx, cidx, event) => {
        copyCurriculum[tidx][cidx].credit = event.target.value;
        setCurriculum(copyCurriculum);
    }

    const handleAddTerm = () => {
        copyCurriculum.push([]);
        setCurriculum(copyCurriculum);
    }

    const handleAddCourse = (tidx) => {
        copyCurriculum[tidx].push({ "code": "", "name": "", "grade": "C1", "credit": 0 },)
        setCurriculum(copyCurriculum);
    }

    const handleDeleteCourse = (tidx, cidx) => {
        copyCurriculum[tidx].splice(cidx, 1);
        setCurriculum(copyCurriculum);
    }

    const handleSave = () => {
        CurriculumService.saveCurriculum(curriculum);
        handleClose();
    }

    return (
        <div>
            <Dialog className={classes.root} open={open} onClose={handleClose}  fullWidth={true} maxWidth={"md"} disableBackdropClick>
                <DialogTitle>Edit Curriculum</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Add or remove courses for your curriculum.
                </DialogContentText>
                    {curriculum.map((term, tidx) => (
                        <Box className={classes.termBox}>

                            <Typography className={classes.termText}>Term {tidx + 1}</Typography>

                            {term.map((course, cidx) => {

                                const code = course.code;
                                const name = course.name;
                                const credit = course.credit;

                                return (
                                    <Box key={`${tidx}_${cidx}`} className={classes.dialogRow}>
                                        <TextField className={classes.dialogCourseCodeField}
                                            variant="outlined"
                                            label={"Course code"}
                                            onChange={(event) => handleCourseCodeChange(tidx, cidx, event)}
                                            value={code}
                                            key={`${tidx}_${cidx}_code`}
                                            size="small"
                                            inputMode="text" />
                                        <TextField className={classes.dialogCourseNameField}
                                            variant="outlined"
                                            label={"Course name"}
                                            key={`${tidx}_${cidx}_name`}
                                            value={name}
                                            onChange={(event) => handleCourseNameChange(tidx, cidx, event)}
                                            inputMode="text"
                                            size="small" />
                                        <TextField className={classes.dialogCourseCreditField}
                                            variant="outlined"
                                            label={"Course credit"}
                                            key={`${tidx}_${cidx}_credit`}
                                            value={credit}
                                            step = {0.1}
                                            inputProps={inputProps}
                                            onChange={(event) => handleCourseCreditChange(tidx, cidx, event)}
                                            inputMode="number"
                                            size="small" />
                                        
                                        <IconButton onClick={() => handleDeleteCourse(tidx, cidx)}>
                                            <DeleteOutlined />
                                        </IconButton>

                                    </Box>
                                );
                            })}
                            <Button color="primary" onClick={() => handleAddCourse(tidx)}>
                                ADD COURSE
                        </Button>
                        </Box>
                    ))}
                </DialogContent>

                <DialogActions>
                <Button onClick={() => {
                    CurriculumService.resetCurriculum();
                    setCurriculum(CurriculumService.getCurriculum());
                    handleClose();
                }} color="primary">
                        RESET TO DEFAULT
                    </Button>
                    <Button onClick={() => {
                        handleClose();
                        setCurriculum(CurriculumService.getCurriculum());
                        }} color="primary">
                        CANCEL
                    </Button>
                    <Button color="primary" onClick={handleAddTerm}>
                        ADD TERM
                </Button>
                    <Button onClick={handleSave} color="primary">
                        SAVE
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}