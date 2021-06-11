
const defaultCurriculum = [
    [
        { "code": "BBM101", "name": "Introduction to Programming I", "grade": "B3", "credit": 6 },
        { "code": "BBM103", "name": "Introduction to Programming Laboratory I", "grade": "C1", "credit": 4 },
        { "code": "MAT123", "name": "Mathematics I", "grade": "C1", "credit": 6 },
        { "code": "FİZ137", "name": "Physics  I", "grade": "C1", "credit": 5 },
        { "code": "BBM105", "name": "Introduction to Computer Engineering", "grade": "C1", "credit": 2 },
        { "code": "İNG111", "name": "Language Skills I", "grade": "C1", "credit": 3 },
        { "code": "TKD103", "name": "Turkish I", "grade": "C1", "credit": 2 },
        { "code": "BEB650", "name": "Basic Information and Communication Technologies", "grade": "C1", "credit": 2 },
    ],
    [
        { "code": "BBM102", "name": "Introduction to Programming II", "grade": "B3", "credit": 8 },
        { "code": "BBM104", "name": "Introduction to Programming Laboratory II", "grade": "C1", "credit": 4 },
        { "code": "MAT124", "name": "Mathematics II", "grade": "C1", "credit": 6 },
        { "code": "FİZ138", "name": "Physics II", "grade": "C1", "credit": 5 },
        { "code": "FİZ117", "name": "General Physics Lab.", "grade": "C1", "credit": 2 },
        { "code": "İNG112", "name": "Language Skills II", "grade": "C1", "credit": 3 },
        { "code": "TKD104", "name": "Turkish II", "grade": "C1", "credit": 2 },
    ],
    [
        { "code": "BBM201", "name": "Data Structures", "grade": "B3", "credit": 5 },
        { "code": "BBM203", "name": "Software Laboratory I", "grade": "C1", "credit": 2 },
        { "code": "BBM205", "name": "Discrete Structures", "grade": "B3", "credit": 5 },
        { "code": "BBM231", "name": "Logic Design", "grade": "B3", "credit": 5 },
        { "code": "BBM233", "name": "Logic Design Lab", "grade": "B3", "credit": 2 },
        { "code": "İST299", "name": "Probability", "grade": "B3", "credit": 5 },
        { "code": "AİT203", "name": "Atatürk's Princ. And The History of The Revol. I", "grade": "B3", "credit": 2 },
        { "code": "MÜH103", "name": "Occupational Health and Safety I", "grade": "B3", "credit": 1 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 3 },
    ],
    [
        { "code": "BBM202", "name": "Algorithms", "grade": "B3", "credit": 4 },
        { "code": "BBM204", "name": "Software Laboratory II", "grade": "C1", "credit": 2 },
        { "code": "BBM234", "name": "Computer Organization", "grade": "B3", "credit": 4 },
        { "code": "MAT254", "name": "Fundamentals of Linear Algebra", "grade": "B3", "credit": 4 },
        { "code": "ELE296", "name": "Introduction to Electronic Circ. and Syst.", "grade": "B3", "credit": 5 },
        { "code": "İST292", "name": "Statistics", "grade": "B3", "credit": 5 },
        { "code": "AİT204", "name": "Atatürk's Princ. And The History of The Revol. II", "grade": "B3", "credit": 2 },
        { "code": "MÜH104", "name": "Occupational Health and Safety II", "grade": "B3", "credit": 1 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 3 },
    ],
    [
        { "code": "BBM301", "name": "Programming Languages", "grade": "B3", "credit": 4 },
        { "code": "BBM325", "name": "Internship I", "grade": "C1", "credit": 5 },
        { "code": "BBM341", "name": "Systems Programming", "grade": "B3", "credit": 4 },
        { "code": "BBM371", "name": "Data Management", "grade": "B3", "credit": 4 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective Lab.", "grade": "B3", "credit": 4 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 3 },
    ],
    [
        { "code": "BBM342", "name": "Operating Systems", "grade": "B3", "credit": 5 },
        { "code": "BBM382", "name": "Software Engineering", "grade": "C1", "credit": 5 },
        { "code": "BBM384", "name": "Software Engineering Lab.", "grade": "B3", "credit": 4 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 4},
    ],
    [
        { "code": "BBM425", "name": "Internship II", "grade": "B3", "credit": 5 },
        { "code": "BBM427", "name": "Technology Seminars I", "grade": "C1", "credit": 1 },
        { "code": "BBM479", "name": "Design Project I", "grade": "B3", "credit": 4 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective Lab.", "grade": "B3", "credit": 4 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 4},
    ],
    [
        { "code": "BBM428", "name": "Technology Seminars II", "grade": "B3", "credit": 1 },
        { "code": "BBM480", "name": "Design Project II", "grade": "C1", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective", "grade": "B3", "credit": 6 },
        { "code": "BBM", "name": "Technical Elective Lab.", "grade": "B3", "credit": 4 },
        { "code": "BBM", "name": "Technical Elective Lab.", "grade": "B3", "credit": 4 },
        { "code": "NTECH", "name": "Nontechnical Elective", "grade": "B3", "credit": 3},
    ],
]

const saveCurriculum = (curriculum) => {
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
}

const resetCurriculum = () => {
    localStorage.removeItem("curriculum");
    saveCurriculum(defaultCurriculum);
}

const getCurriculum = () => {
    const curriculum = localStorage.getItem("curriculum");
    if (curriculum === null || curriculum === "") {
        saveCurriculum(defaultCurriculum);
        return defaultCurriculum;
    }
    return JSON.parse(curriculum);
}


export const CurriculumService = { saveCurriculum, getCurriculum, resetCurriculum };