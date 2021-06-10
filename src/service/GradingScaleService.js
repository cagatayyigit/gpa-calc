

const saveGradingScale = (scale) => {
    localStorage.setItem("grading_scale", JSON.stringify(scale));
}

const getGradingScale = () => {
    const scale = localStorage.getItem("grading_scale");
    if (scale === null || scale === "") {
        return [
            { "grade": "A1", "score": 4.0 }, 
            { "grade": "A2", "score": 3.75 }, 
            { "grade": "A3", "score": 3.5 },
            { "grade": "B1", "score": 3.25 },
            { "grade": "B2", "score": 3.0 },
            { "grade": "B3", "score": 2.75 },
            { "grade": "C1", "score": 2.5 },
            { "grade": "C2", "score": 2.25 },
            { "grade": "C3", "score": 2.0 },
            { "grade": "D", "score": 1.75 },
            { "grade": "F2", "score": 0 },
            { "grade": "F3", "score": 0 },
        ];
    }
    return JSON.parse(scale);
}

const gradeToScore = (grade) => {
    let scales = GradingScaleService.getGradingScale();
    for (var i = 0; i < scales.length; i++){
        if (scales[i].grade === grade){
            return scales[i].score;
    }
  }
  return 0;
}

export const GradingScaleService = { saveGradingScale, getGradingScale , gradeToScore};