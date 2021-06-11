

const saveTakenCourses = (takenCourses) => {
    localStorage.setItem("taken_courses", JSON.stringify(takenCourses));
}

const getTakenCourses = () => {
    const taken_courses = localStorage.getItem("taken_courses");
    if (taken_courses === null || taken_courses === "") {
        return [
            [
                { "code": "BBM105", "name": "Introduction to Computer Engineering", "grade": "A1", "credit": 2 },
                { "code": "İNG111", "name": "Language Skills I", "grade": "F2", "credit": 3 },
                { "code": "TKD103", "name": "Turkish I", "grade": "D", "credit": 2 },
                { "code": "TKD103", "name": "Turkish I", "grade": "C1", "credit": 2 },
            ],
            [
                { "code": "MAT124", "name": "Mathematics II", "grade": "C1", "credit": 6 },
                { "code": "FİZ138", "name": "Physics II", "grade": "B1", "credit": 5 },
                { "code": "FİZ117", "name": "General Physics Lab.", "grade": "A1", "credit": 2 },
            ],
        ]
    }

    return JSON.parse(taken_courses);
}

const removeCourse = (course) => {
    const taken_courses = getTakenCourses();
    let newTakenCourses = [...taken_courses]
    newTakenCourses.forEach((t, idx) => {
        newTakenCourses[idx] = newTakenCourses[idx].filter(c => c !== course)
    })
    saveTakenCourses(newTakenCourses);
}

const addCourse = (term, termIdx, course) => {
    const taken_courses = getTakenCourses();
    let newTakenCourses = [...taken_courses]
    newTakenCourses[termIdx].push(course);
    saveTakenCourses(newTakenCourses);
}

const addTerm = () => {
    const taken_courses = getTakenCourses();
    let newTakenCourses = [...taken_courses]
    newTakenCourses.push([]);
    saveTakenCourses(newTakenCourses);
}

export const TakenCoursesService = { saveTakenCourses, getTakenCourses, removeCourse, addCourse, addTerm };