
const defaultScale = [
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
    { "grade": "F1", "score": 0 },
    { "grade": "F2", "score": 0 },
    { "grade": "F3", "score": 0 },
];

const saveGradingScale = (scale) => {
    localStorage.setItem("grading_scale", JSON.stringify(scale));
}

const getGradingScale = () => {
    const scale = localStorage.getItem("grading_scale");
    if (scale === null || scale === "") {
        saveGradingScale(defaultScale);
        return defaultScale;
    }
    return JSON.parse(scale);
}

const gradeToScore = (grade) => {
    let scales = GradingScaleService.getGradingScale();
    for (var i = 0; i < scales.length; i++) {
        if (scales[i].grade === grade) {
            return scales[i].score;
        }
    }
    return 0;
}

const getColor = (grade) => {
    const lerpHex = (a, b, amount) => {
        const ar = a >> 16;
        const ag = (a >> 8) & 0xff;
        const ab = a & 0xff;

        const br = b >> 16;
        const bg = (b >> 8) & 0xff;
        const bb = b & 0xff;

        const rr = ar + amount * (br - ar);
        const rg = ag + amount * (bg - ag);
        const rb = ab + amount * (bb - ab);

        return (rr << 16) + (rg << 8) + (rb | 0);
    }

    const scale = getGradingScale();
    const min = Math.min.apply(Math, scale.map(function (o) { return o.score; }));
    const max = Math.max.apply(Math, scale.map(function (o) { return o.score; }));
    // const sum = scale.reduce(function(prev, cur) {return prev + cur.score;}, 0);

    const score = gradeToScore(grade);
    const percentage = min + score / (max - min);

    const color = lerpHex(parseInt("FF6F31", 16), parseInt("57BB8A", 16), percentage).toString(16);
    
    return `#${color}`;
}


export const GradingScaleService = { saveGradingScale, getGradingScale, gradeToScore, getColor };