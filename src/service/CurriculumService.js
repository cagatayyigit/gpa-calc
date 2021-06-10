

const saveCurriculum = (curriculum) => {
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
}

const getCurriculum = () => {
    const curriculum = localStorage.getItem("curriculum") ;
    if (curriculum === null || curriculum === "") {
        return {
             "curriculum" :[
                [
                    { "code": "BBM101", "name": "Introduction to Machine", "grade": "B3", "credit": 3 },
                    { "code": "BBM103", "name": "Introduction to Machine", "grade": "C1", "credit": 3 }
                ],
                [
                    { "code": "BBM102", "name": "Introduction to Machine", "grade": "B3", "credit": 3 },
                    { "code": "BBM104", "name": "Introduction to Machine", "grade": "C1", "credit": 3 }
                ],
                [
                    { "code": "BBM105", "name": "Introduction to Machine", "grade": "B3", "credit": 3 },
                    { "code": "BBM106", "name": "Introduction to Machine", "grade": "C1", "credit": 3 },
                    { "code": "BBM4002", "name": "Introduction to Machine", "grade": "B3", "credit": 3 },
                ],
            ]
        }
    }
    return JSON.parse(curriculum);
}


export const CurriculumService = {saveCurriculum, getCurriculum};