

const saveGradingScale = (scale) => {
    localStorage.setItem("grading_scale", JSON.stringify(scale));
}

const getGradingScale = () => {
    const scale = localStorage.getItem("grading_scale");
    if (scale === null || scale === "") {
        return [{ "grade": "A1", "score": 4.0 }, { "grade": "A2", "score": 3.75 }, { "grade": "A3", "score": 3.5 }];
    }
    return JSON.parse(scale);
}


export const GradingScaleService = { saveGradingScale, getGradingScale };