import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { GradingScaleService } from '../service/GradingScaleService';
import { Box } from '@material-ui/core';

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


export default function GradingScaleDialog({ open, handleClose }) {
    const classes = useStyles();

    const [scale, setScale] = useState(GradingScaleService.getGradingScale());

    const handleGradeNameChange = (oldKey, event) => {
        const newKey = event.target.value;
        for (const i in scale) {
            if (scale[i].grade === oldKey) {
                scale[i].grade = newKey;
                console.log("Grade changed:", oldKey, newKey);
                break;
            }
        };
        setScale(JSON.parse(JSON.stringify(scale)));
    }

    const handleScoreChange = (key, event) => {
        for (const i in scale) {
            if (scale[i].grade === key) {
                scale[i].score = event.target.value;
                break;
            }
        }
        setScale(JSON.parse(JSON.stringify(scale)));
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Set Grading Scale</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Configure your grading scale.
                </DialogContentText>
                {scale.map((entry, idx) => {
                    const k = entry.grade;
                    const v = entry.score;
                    return (
                        <Box key={idx} className={classes.dialogRow}>
                            <TextField className={classes.dialogGradeField}
                                variant="outlined"
                                label={"Grade"}
                                onChange={(event) => handleGradeNameChange(k, event)}
                                value={k}
                                key={`${idx}g`}
                                size="small"
                                inputMode="text" />
                            <TextField className={classes.dialogScoreField}
                                variant="outlined"
                                label={"Score"}
                                key={`${idx}s`}
                                value={v}
                                onChange={(event) => handleScoreChange(k, event)}
                                inputMode="number"
                                size="small" />

                        </Box>
                    );
                })}
            </DialogContent>

            <DialogActions>
                <Button onClick={() => {
                    setScale(GradingScaleService.getGradingScale());
                    handleClose();
                }} color="primary">
                    CANCEL
                </Button>
                <Button color="primary" onClick={() => {
                    setScale([...scale, { "grade": "", "score": 0.0 }]);
                }}>
                    ADD GRADE
                </Button>
                <Button onClick={() => {
                    GradingScaleService.saveGradingScale(scale);
                    handleClose();
                }} color="primary">
                    SAVE
                </Button>
            </DialogActions>
        </Dialog>
    );
}